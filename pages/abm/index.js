import {getJSONList} from "../../src/andromedaAPI/resource-storage";
import VirtualizedList from "../../components/VirtualizedList";
import {useRouter} from 'next/router'
import useUnauthorizedRender from "../../src/hooks/useUnauthorizedRender";

export default function ABMList ({list}){
    const router = useRouter();

    const data = list.map(name=> {
        const nameWithoutExtension = name.replace('.json','');
        const humanReadable = nameWithoutExtension.replace( /([A-Z])/g, " $1" );
        const humanReadableCaps = humanReadable.charAt(0).toUpperCase() + humanReadable.slice(1).toLowerCase();
        return {primary:humanReadableCaps, path:nameWithoutExtension}
    });



    const onClickListItem =({item})=>{
        router.push(`abm/${item.path}`)
    }

    return <VirtualizedList items={data} onClickListItem={onClickListItem}/>
}

export async function getServerSideProps(context) {
    // const data = await fetch("http://localhost:3000/api/mockCurrencyMetaData")
    //     .then(res => res.json())
    //     .then(data => data)
    // get(santaCruz)
    const list = await getJSONList({domain:'abm'})
    // const routeName = getABMId(req.url);

    useUnauthorizedRender(context)

    return {
        props: {
            list
        }
    }
}