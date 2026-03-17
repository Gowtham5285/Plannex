const express=require("express");
const router=express.Router()
const {users,getUser,deleteUser}=require("../controllers/admin.js")

router.get("/",users)
router.get("/:id",getUser)
router.delete("/:id",deleteUser)




module.exports=router