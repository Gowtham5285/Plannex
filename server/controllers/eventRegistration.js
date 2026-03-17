exports.registerEvent=async(req,res)=>{
    try {
        res.send("regsiter event")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.cancelEvent=async(req,res)=>{
    try {
        res.send("cancel event")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.myEvents=async(req,res)=>{
    try {
        res.send("myevents")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.getParticipants=async(req,res)=>{
    try {
        res.send("get participants")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}