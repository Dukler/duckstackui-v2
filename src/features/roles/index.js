import {getCurrentRoles} from "../../utils/url";

export default async function applyRoleFiltering(data, entities) {
    const roles = getCurrentRoles();
    const rolesAPI = await fetch("http://localhost:3000/api/roles").then(res => res.json())
    const unauthorizedEntities = roles.map(role => rolesAPI[role].unauthorized[entities])
        .reduce((array, nextRole) => {
            nextRole.forEach(component => array.push(component));
            return array;
        })

    return filterContent(data,unauthorizedEntities)
}
export async function filterByRole(entities){
    const roles = getCurrentRoles();
    const rolesAPI = await getRolesAPI();
    return roles.map(role => rolesAPI[role].unauthorized[entities])
        .reduce((array, nextRole) => {
            nextRole.forEach(component => array.push(component));
            return array;
        })
}

function filterContent (data, unauthorizedEntities) {
    return data?.filter(rawComponent => {
        if (rawComponent.children) rawComponent.children = filterContent(rawComponent.children,unauthorizedEntities)
        return !unauthorizedEntities?.includes(rawComponent.id)
    })
}
//default value is just for testing, remove later
export const getRolesAPI = async (url = "http://localhost:3000/api/roles") => fetch(url).then(res => res.json())