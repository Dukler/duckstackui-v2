export default (req, res) => {
    res.status(200).json({
        items: ['a','b','c','f','g'],
        string: "SimpleCard" })
}
