export default (req, res) => {
    res.status(200).json([
        {
            currencyId : 1000,
            currencyDesc : "BOLIVIANOS",
            currencyMnemonic : "BS",
            currencyFraction : 2,
            clientCode : "1",
            currencyThousandSeparator : ".",
            currencyDecimalSeparator : ","
        },
        {
            currencyId : 2000,
            currencyDesc : "DOLARES ESTADOUNIDENSES",
            currencyMnemonic : "USD",
            currencyFraction : 2,
            clientCode : "2",
            currencyThousandSeparator : ".",
            currencyDecimalSeparator : ","
        },
        {
            currencyId : 3000,
            currencyDesc : "EUROS",
            currencyMnemonic : "EUR",
            currencyFraction : 2,
            clientCode : null,
            currencyThousandSeparator : ".",
            currencyDecimalSeparator : ","
        },
        {
            currencyId : 4000,
            currencyDesc : "UNIDAD DE FOMENTO DE VIVIENDA",
            currencyMnemonic : "UFV",
            currencyFraction : 2,
            clientCode : "4",
            currencyThousandSeparator : ".",
            currencyDecimalSeparator : ","
        }
    ])
}

