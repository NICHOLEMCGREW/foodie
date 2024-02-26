import { Request, Response } from "express";
import { Recipe  } from "src/models";

export const getAllRecipes = async (req: Request, res: Response) => {
    try {
      const recipes = await Recipe.find({})
        .populate("user", "email")
        .sort({ _id: -1 })
        .exec();
      res.status(200).json(recipes);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occured while processing your request" });
    }
  };

  export const getRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const recipe = await Recipe.findById(id).populate("user", "email").exec();
      res.status(200).json(recipe);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occured while processing your request" });
    }
  };
  
  export const getUserRecipes = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      const recipe = await Recipe.find({ user: userId })
        .populate("user", "email")
        .sort({ _id: -1 })
        .exec();
      res.status(200).json(recipe);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occured while processing your request" });
    }
  };
  