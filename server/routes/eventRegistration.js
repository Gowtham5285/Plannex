const express=require("express");
const router=express.Router()
const {registerEvent,cancelEvent,getParticipants,myEvents}=require("../controllers/eventRegistration.js")

router.post("/:eid",registerEvent)
router.delete("/cancel/:eid",cancelEvent)
router.get("/my-events",myEvents)
router.get("/eid/participants",getParticipants)
module.exports=router