import {getSliceName} from "../utils/url";
import {getAllowedJSON} from "../andromedaAPI/resource-storage";
import {contentReader, getAdditionalContent} from "../utils/content";


//Descargo el contenido (multiples json) filtrando componentes por rol
//todo: filtrar url
export default async function useHydration(url, path) {

    //filtro los requests del framework
    if (!url.includes("_nextDataDevelopment") ){
        const slice = getSliceName(url)
        console.log("slice name:", slice)
        const content = await getAllowedJSON(`${path}/${slice}.json`)
        const additionalContent = await contentReader(content, getAdditionalContent)
        return [slice, content, additionalContent]
    }
}