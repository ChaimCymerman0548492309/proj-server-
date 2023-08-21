import express from "express"
import usersRouter from './usersrouters/usersRuoter.js';
import morgan from "morgan";
import usersRoute from './users/usersRoute2.js'



const app = express()
const port = 8200

app.use(express.json());
app.use(morgan("dev"));



app.use("/users", usersRoute)
app.use("/", usersRouter)





app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


