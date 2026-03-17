exports.register = async (req, res) => {
    try {
        res.send("register sucessfull")
    } catch (error) {
        res.send("something went wrong")
    }
}

exports.login = async (req, res) => {
    try {
        res.send("login sucessfull")
    } catch (error) {
        res.send("something went wrong")
    }
}

exports.profile = async (req, res) => {
    try {
        res.send("profile viewed sucessfully")
    } catch (error) {
        res.send("something went wrong")
    }
}

exports.updateProfile = async (req, res) => {
    try {
        res.send("updated profile sucessfully")
    } catch (error) {
        res.send("something went wrong")
    }
}