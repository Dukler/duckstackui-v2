import {getCurrentRoles} from "../utils/url";

const rolesAPI = {
    user:{
        unauthorized:{
            components:["passwordField"],
            pages:[],
        }
    },
    dev:{
        unauthorized:{
            components:["CURRENCY_MNEMONIC","CURRENCY_FRACTION"],
            pages:[],
        }
    }
}


export default function useRolesApi(entities){
    const currentRoles = getCurrentRoles();
    // const rolesPermissions = useSelector(state => Object.keys(state.roles)?.filter(keys=>roles.includes(keys)) );
    // const rolesAPI = useSelector(state=> state.roles)



    const unauthorizedEntities = currentRoles.map(role => rolesAPI[role].unauthorized[entities])
        .reduce((array, nextRole)=>{
            nextRole.forEach(component=>array.push(component));
            return array;
        })

    return [unauthorizedEntities]
}