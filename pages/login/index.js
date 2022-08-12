import React, {useState} from 'react';
import {TextField} from "../../components/Material";
import useDynamicScreen from "../../src/hooks/useDynamicScreen";


export default function Login({content, rolesAPI}) {
    const [state, setState] = useState(null)


    const [screen, setScreen] = useDynamicScreen({content})

    return screen
}

export async function getServerSideProps({req, res}) {
    const content = await fetch("http://localhost:3000/api/mocklogin")
        .then(res => res.json())
        .then(data => data)

    // get(santaCruz)
    return {
        props: {
            content
        }
    }
}
