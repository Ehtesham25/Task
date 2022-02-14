import  express  from "express";

import {signIn,signUp} from "../Controller/user.js"

const router=express.Router()


router.post("/signIn",signIn)
router.post("/signUp",signUp)

export default router

