import React from 'react';
import {getPageNameByLevel} from "../../src/utils/url";

export default function GestionContainer({host, content,id}) {
    // const [screen]  = useDynamicScreen(content)
    // const screen = DynamicScreenRenderer({content})

    return null
}

export async function getServerSideProps({ req, res }) {
    // res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=1, stale-while-revalidate=59'
    // );
    // const content = await getAllowedJSON(`/pages/gestionPersona.json`)
    const id = getPageNameByLevel(req.url, 1);

    return {
        props: {
            id
        }
    };
}