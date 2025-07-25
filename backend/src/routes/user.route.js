import { Router } from "express";

const router = Router();

router.get("/", (req, res) => { 
    req.auth.userId
    res.send("User route with GET Method" );
});

export default router

