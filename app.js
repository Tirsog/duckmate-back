import express from "express";
const app = express();
const PORT = process.env.PORT;
import morgan from "morgan"
import cors from 'cors'


import postRouter  from "./routes/post.js"
import customerRouter from "./routes/customer.js"

// Using cors to avoid localhost issue
// https://expressjs.com/en/resources/middleware/cors.html
 app.use(cors())
/*  app.options('*', cors()) */
// Parse the request JSON Body - This is an example of Middleware.
app.use(express.json());

// Using Morgan
// Morgan shows a report in the console. "GET / 200 1.693 ms - 70"
app.use(morgan("dev"))

// Using Router for each endpoint

app.use("/api/post", postRouter);
app.use("/api/customer", customerRouter);

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Listening Port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
