import { Router } from "express";
import { registerOrLogin } from "src/controllers"; 
import { validate } from "src/middleware";
import { joinSchema } from "src/schema-validation";

const router = Router()

router.post("/join", validate(joinSchema), registerOrLogin);

export { router };