import {getAllowedJSON} from "../andromedaAPI/resource-storage";
import {importJson} from "../DynamicContent/Content";

export const contentReader = async (content, onComponentCallback) => {
    let response = null;
    for (const component of content) {
        if (component.children) await contentReader(component.children, onComponentCallback)
        // console.log(onComponentCallback(component))
        // console.log(component)
        const cbResponse = await onComponentCallback(component);
        if (cbResponse) response = {[component.id]: await onComponentCallback(component)}
    }
    return response
}

export async function getAdditionalContent({additionalContent, props}) {

    if (!additionalContent) return null
    const {propsBased, list} = additionalContent;

    if (propsBased) {
        let propList = props;
        propsBased.attribute.split(".").forEach((att) => {
            propList = propList[att]
        })
        let contentList = {}
        for (const item of propList) {
            try {
                //todo:change importContent for getAllowedJSON
                // const content = await getAllowedJSON(`${propsBased.path}${item}.json`)
                const content = await importJson(`${propsBased.path}${item}.json`)

                contentList = {...contentList, [item]: content}
            } catch (e) {}
        }

        return contentList
    }


    return null;
}