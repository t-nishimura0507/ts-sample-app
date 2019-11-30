import express from "express";
import path from "path";
import session from "express-session";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: false
}));

app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.render("error", {
      errorMessage: error.stack
    });
  }
);

app.listen(8080, () => {
  console.log("app started");
});
