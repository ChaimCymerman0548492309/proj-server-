import express from "express";
import usersRouter from './users.router/usersRuoter.js'

const app = express()
const port = 8080


app.use(express.json());



app.use("/", usersRouter)



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


