import express from 'express'
import {Router} from "express";
import {checkSession, loginUser, registerUser} from "../controllers/authControllers";

const router  = express.Router()


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/check-session',checkSession)



export default router;