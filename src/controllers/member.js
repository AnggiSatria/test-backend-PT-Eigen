const { member } = require("../../models")

exports.addMember = async() => {
    try {
        await member.create(req.body)

        res.send({
            status: "success",
            message : "Add member success"
        })

    } catch (error) {
        console.log(error);
    }
}

