export default (req, res) => {
    res.status(200).json([{
        id:"paperFormContainer",
        library: "Material",
        component: "Paper",
        props:{
            elevation:3
        },
        children: [
            {
                id:"userField",
                library: "Material",
                component: "TextField",
                props:{
                    label: "username",
                }
            },
            {
                id:"passwordField",
                library: "Material",
                component: "TextField",
                props:{
                    label: "password"
                }
            }
        ]
    }])
}
