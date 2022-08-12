export default (req, res) => {
    res.status(200).json({
        user:{
            unauthorized:{
                components:["passwordField"],
                pages:[],
            }
        },
        dev:{
            unauthorized:{
                components:["CURRENCY_MNEMONIC","CURRENCY_FRACTION"],
                pages:[],
            }
        }
    })
}

