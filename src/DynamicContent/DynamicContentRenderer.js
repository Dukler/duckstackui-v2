import dynamic from "next/dynamic";
import ComponentWrapper from "./ComponentWrapper";
import {v4 as uuidv4} from 'uuid';
import React from "react";
import {getMods} from "../utils/string";


export function DynamicContentRenderer({content, callbacks, slice, additionalContent}) {

    const flatArray = content?.map((object, index) => {
        //si el objeto es metadata, no tengo renderizar
        if (content?.[index]?.isMetadata) return
        //Si el componete no existe o no esta definido, tampoco renderizo
        if (typeof object?.component === undefined || !object?.component) return
        const DynamicComponent = createComponent(object.component, object.ssr);

        const id = object.id ?? uuidv4();

        const wrappedComponent = (id, props) => {
            let children;
            if (typeof object.children === "string"  || object.children instanceof String){
                // console.log("stringcomp")
                children = () => object.children
            }else{
                children = () => DynamicContentRenderer({content: object.children, callbacks, slice});
            }
            children = () => DynamicContentRenderer({content: object.children, callbacks, slice});
            let selfWrap;

            let processedAdditionalContent = null;
            if (object.additionalContent) {
                const compAddCont = additionalContent?.[id];
                for (const key of Object.keys(compAddCont)) {
                    processedAdditionalContent = {
                        ...processedAdditionalContent,
                        [key]: DynamicContentRenderer({content: compAddCont[key], slice})
                    }
                }
            }

            if (typeof object.children === "string") children = () => object.children
            let selfWrapProps = {};
            if (object.selfWrap) {
                selfWrap = createComponent(object.selfWrap.component)
                const {component, ...rest} = object.selfWrap;
                selfWrapProps = rest;
            }
            return <ComponentWrapper DynamicComponent={DynamicComponent}
                                     key={`wrapper-${id}`}
                                     selfWrap={{DynamicComponent: selfWrap, ...selfWrapProps}}
                                     eventListeners={object.eventListeners}
                                     slice={slice}
                                     additionalContent={processedAdditionalContent}
                                     props={props}
                                     children={children()}
                                     modal={object.modal}
            />
        }

        if (Array.isArray(id)) return id.map(
            id => {
                return wrappedComponent(id, {...object.globalProps, ...object?.[id]?.props, id, styles: object.styles})
            }
        );

        return wrappedComponent(id, {...object.props, id, styles: object.styles})
    }).flat(1)

    const metadata = content?.[0];
    if (metadata?.isMetadata) {
        let orderedArr = []
        const auxArr = flatArray.slice(1);

        const order = metadata.order;

        auxArr.forEach(item => {
            orderedArr[order.indexOf(item?.props?.props?.id)] = item;
        })

        return orderedArr
    }
    return flatArray
}

const createComponent = (component, ssr = true) => {
    // const prefix = getPrefix(component);
    // const comp = component.includes('|') ? component.substr(component.indexOf('|') + 1) : component;
    // if(!component) return ()=> null;
    const [prefix, comp] = getMods(component)

    if (prefix === 'html') return ({children, ...props}) => {
        const {dispatch, ...newProps} = props;
        return React.createElement(comp, newProps, children)
    };

    if (prefix) return dynamic(() => import(`../../components/${prefix}`)
        .then(module => module[comp]), {ssr});

    return dynamic(() => import(`../../components/${comp}`), {ssr});


}

