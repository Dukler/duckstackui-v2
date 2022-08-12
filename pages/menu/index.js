import SimpleCard from "../../components/SimpleCard";
import dynamic from 'next/dynamic'
import {useState} from "react";



export default function Menu({items, string}){
    const DynamicComponent = dynamic(() => import(`../../components/${string}`))

    return items.map(item=>{
        return <DynamicComponent key={item} item={item}/>
    }) ;
}

export async function getServerSideProps({ req, res }) {
    const tenant = 'santaCruz'
    const data = await fetch("http://localhost:3000/api/mockmenu")
        .then(res=>res.json())
        .then(data=> data)

    // get(santaCruz)
    return {
        props: {
            ...data
        }
    }
}

