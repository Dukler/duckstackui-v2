import {useEffect, useState} from "react";
import {DynamicContentRenderer} from "../DynamicContent/DynamicContentRenderer";


export default function useDynamicScreen(content, callbacks, slice) {
    const [comps, setComps] = useState([]);
    const setScreen = (newScreenProps) => setComps(DynamicContentRenderer(newScreenProps))

    useEffect(()=>{
        setComps(DynamicContentRenderer({content, callbacks, slice}))
    },[])
    return [comps, setScreen];
}