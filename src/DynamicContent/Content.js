import {getCurrentRoles, getSliceName} from "../utils/url";
import {downloadJson} from "../andromedaAPI/resource-storage";
import {contentReader, getAdditionalContent} from "../utils/content";
import {filterByRole, getRolesAPI} from "../features/roles";


//Descargo el contenido (multiples json) filtrando componentes por rol
//todo: filtrar url
export const getDynamicContent = async (context, path) => {
    const url = context.req.url;
    //filtro los requests del framework
    if (!url.includes("_nextDataDevelopment") ){
        const slice = getSliceName(url)
        //todo:change importContent for getFilteredContent
        const content = await getFilteredContent(`${path}/${slice}.json`)
        const addContent = await contentReader(content, getAdditionalContent)
        return {slice, content, additionalContent: typeof addContent === undefined ? null : addContent}
    }

}

export const importJson = async (params)=> {
    return require(`../../jsons${params}`)
}

//todo:cambiar "importJSON", por "downloadJSON" cuando tengamos recursos
// const getFilteredContent = async (params, entities = 'components') =>
//     downloadJson(params)
//         .then(json => contentFiltering(json, entities))

const getFilteredContent = async (params, entities = 'components') =>
    importJson(params)
        .then(json => json)

async function contentFiltering(data, entities) {
    //filter by tenant
    let unauthorizedEntities = await filterByRole(entities);

    return filter(data,unauthorizedEntities)
}

function filter (data, unauthorizedEntities) {
    return data?.filter(rawComponent => {
        if (rawComponent.children) rawComponent.children = filter(rawComponent.children,unauthorizedEntities)

        return !unauthorizedEntities?.includes(rawComponent.id)
    })
}