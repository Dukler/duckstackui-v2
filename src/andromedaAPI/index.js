export const getEntityMetadata = async (entity) =>
    fetch(`http://localhost:3000/api/${entity}MetaData`)
        .then(res => res.json())
        .then(data => data)

export const getScreenJSON = async (screen) =>
    fetch(`http://localhost:3000/api/${screen}`)
        .then(res => res.json())
        .then(data => data)


export const getAbmData = async (abm) =>
    fetch(`http://localhost:3000/api/${abm}Data`)
        .then(res => res.json())
        .then(data => data)

export const getAndromedaUrl = ({
                                    service,
                                    resource,
                                    params
                                }) => `${process.env.NEXT_PUBLIC_api_gateway}/${service}/${resource}${params || ''}`


