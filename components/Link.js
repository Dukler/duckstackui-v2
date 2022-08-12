import NextLink from "next/link";
import useRolesApi from "../src/hooks/useRolesApi";

export default function Link (props) {
    const [unauthorizedPages] = useRolesApi('pages');
    const newProps = unauthorizedPages.includes(props.as.slice(1)) ? {...props, as:"/unauthorized", href:"/unauthorized"} : props;
    return <NextLink{...newProps}/>
}