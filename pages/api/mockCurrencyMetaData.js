export default (req, res) => {
    res.status(200).json({
        __name:"currency",
        currencyId:"bigint",
        currencyDesc:"varchar",
        currencyMnemonic:"varchar",
        currencyFraction:"int",
        clientCode:"varchar",
        currencyThousandSeparator:"nchar",
        currencyDecimalSeparator:"nchar"
    })
}
