import React, {useEffect} from 'react';
import {getAllowedJSON} from "../src/andromedaAPI/resource-storage";
import {DynamicContentRenderer} from "../src/DynamicContent/DynamicContentRenderer";
import {useRouter} from "next/router";

export default function Home({host, content}) {
    // const [screen]  = useDynamicScreen(content)
    // const screen = DynamicScreenRenderer({content})
    const router = useRouter();
    useEffect(()=>{
        router.push("/pages/demo")
    },[])

    // return DynamicScreenRenderer({content, slice:"gestion"})
    return null
}

export async function getServerSideProps({ req, res }) {
    // res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=1, stale-while-revalidate=59'
    // );
    // const content = await getAllowedJSON(`/pages/gestionPersona.json`)
    const content = {}

    return {
        props: {
            content
        }
    };
}