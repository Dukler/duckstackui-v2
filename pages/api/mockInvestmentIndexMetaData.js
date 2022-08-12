export default (req, res) => {
    res.status(200).json({
        __name:"InvestmentIndex",
        INVESTMENT_PROFILE_ID:"numeric",
        SECTION_ID:"numeric",
        SUB_SECTION_ID:"numeric",
        CURRENCY_ID:"numeric",
        INVESTMENT_INDEX_ID:"numeric",
        PARENT_INDEX_ID:"numeric",
        INDEX_PERCENTAGE:"numeric"
    })
}
