exports.users=async(req,res)=>{
    try {
        res.send("users")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.getUser=async(req,res)=>{
    try {
        res.send("user")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        res.send("delete users")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}