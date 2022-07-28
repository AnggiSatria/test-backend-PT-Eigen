const { books } = require("../../models")

exports.addBook = async(req, res) => {
    try {

        await books.create(req.body)

        res.send({
            status : "Success",
            message : "Add Book Success",
        })
        
    } catch (error) {
        console.log(error);
    }
}

exports.getBooks = async(req, res) => {
    try {
        
        await books.findAll()

    } catch (error) {
        console.log(error);
    }
}

exports.getBook = async(req, res) => {
    try {
        
        const {id} = req.params

        await books.findOne()

        res.send({

        })

    } catch (error) {
        console.log(error);
    }
}