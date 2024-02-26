import { Request, Response } from "express";
import { User } from "src/models";
import bcrypt from 'bcryptjs'

export const registerOrLogin = async (req: Request, res: Response) => {
    const { email, password }: {email: string; password: string } = req.body;

    try {
    const _user = await User.findOne({email}).select('+password').exec();    
    if(_user){
        if(!(await(bcrypt.compare(password, _user?.password)))){
            return res.status(400).json({ error: "Invalid email or password"})
        }
    }
    } catch (error) {
        
    }
    return res.send('You joined!');
};