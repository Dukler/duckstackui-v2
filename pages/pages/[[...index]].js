import React from 'react';
import gestionReducer from "../../src/features/gestion/gestionReducer";
import {DynamicContentRenderer} from "../../src/DynamicContent/DynamicContentRenderer";
import useDynamicSlice from "../../src/hooks/useDynamicSlice";
import {getDynamicContent} from "../../src/DynamicContent/Content";
import store from "../../src/store/store"

export default function DynamicPages({content,slice, additionalContent}) {

    useDynamicSlice(slice,gestionReducer);


    return DynamicContentRenderer({content, slice, additionalContent})
}

export async function getServerSideProps(ctx) {
    // res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=1, stale-while-revalidate=59'
    // );
    const {slice, content, additionalContent} = await getDynamicContent(ctx, "/pages")


    return {
        props: {
            slice,
            content,
            additionalContent
        }
    };
}

