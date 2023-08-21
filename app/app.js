import express from "express"
import usersRouter from './users.router/usersRuoter.js';
import morgan from 'morgan';



const app = express()
const port = 8200


app.use(express.json());
app.use(morgan("dev")); 


app.use("/", usersRouter)





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


