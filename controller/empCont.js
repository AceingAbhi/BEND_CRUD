import express from "express"
import { createEmp,delEmp,getEmp,getEmps,updEmp} from "../service/empSer.js"

const router=express.Router()
router.route("/").post(createEmp)
router.route("/").get(getEmp)
router.route("/:id").get(getEmps)
router.route("/:id").delete(delEmp)
router.route("/:id").put(updEmp)




export {router}