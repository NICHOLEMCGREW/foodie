import * as dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response, Application} from 'express'
import cors from 'cors'
import helmet from 'helmet';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(helmet());

app.all('*', (req: Request, res: Response) => {
    res.status(404).json({message: 'The route you requested is not found'})
})

const PORT = (process.env.PORT as unknown as number) || 5000;

app.listen(PORT, () => {
    console.log(`Server listing on port ${PORT}`)
})