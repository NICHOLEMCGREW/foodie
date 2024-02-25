import { Router } from "express";
import { registerOrLogin } from "./../controllers/auth";

const router = Router()

router.post("/join", registerOrLogin);

export { router };