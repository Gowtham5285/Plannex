exports.createEvent=async(req,res)=>{
    try {
        res.send("created events")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.getAllEvents=async(req,res)=>{
    try {
        res.send("gets all users")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.getEvent=async(req,res)=>{
    try {
        res.send("gets the single event")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}


exports.deleteEvent=async(req,res)=>{
    try {
        res.send("Event deleted")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}


exports.updateEvent=async(req,res)=>{
    try {
        res.send("updated event")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}

exports.uploadEventPoster=async(req,res)=>{
    try {
        res.send("upload event poster")
    } catch (error) {
        res.send("something went wrong")
        next(error)
    }
}