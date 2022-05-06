import express from "express";
const router = express.Router();
// import {ragister} from "../controller/auth";
import {ragister} from "../controller/auth"
router.post("/ragister",ragister);
module.exports = router;