import passport from "passport";
import express from "express";
import {
  getAllRecipes,
  getRecipe,
  getUserRecipes,
  createRecipe,
  searchRecipe,
} from "./
";
import { validate } from "../middleware";
import {
  createRecipeSchema,
  getRecipeSchema,
  getUserRecipesSchema,
  searchRecipeSchema,
} from "./../schema-validation"

const router = express.Router();

router.get(
  "/find",
  passport.authenticate("jwt", { session: false }),
  validate(searchRecipeSchema),
  searchRecipe
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllRecipes
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validate(createRecipeSchema),
  createRecipe
);
router.get(
  "/user/:userId",
  passport.authenticate("jwt", { session: false }),
  validate(getUserRecipesSchema),
  getUserRecipes
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validate(getRecipeSchema),
  getRecipe
);

export { router };