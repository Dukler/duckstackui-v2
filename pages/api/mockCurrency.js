export default (req, res) => {
    res.status(200).json([
        {
            id:"currencyId",
            library: "Material",
            component: "TextField",
            props: {
                label: "currencyID"
            }
        },
        {
            id:"currencyDesc",
            library: "Material",
            component: "TextField",
            props: {
                label: "currencyDesc"
            }
        },
        {
            id:"currencyMnemonic",
            library: "Material",
            component: "TextField",
            props: {
                label: "currencyMnemonic"
            }
        }
    ])
}

// export default (req, res) => {
//     res.status(200).json([
//         {
//             library: "Material",
//             component: "TextField",
//             props: {
//                 label: "currencyID"
//             }
//         },
//         {
//             library: "Material",
//             component: "TextField",
//             props: {
//                 label: "currencyDESC"
//             }
//         },
//         {
//             library: "Material",
//             component: "TextField",
//             props: {
//                 label: "currencyMNEMONIC"
//             }
//         }
//     ])
// }
