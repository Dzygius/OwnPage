const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const dbConnection = require("./database");
const { body, validationResult } = require("express-validator");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("img"));
app.use(express.static("css"));
app.use(express.static("js"));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 3600 * 1000,
  })
);
const ifNotLoggedin = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.render("Pages/index", { isLoggedIn: req.session.isLoggedIn });
  }
  next();
};

const ifLoggedin = (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("Pages/index", { isLoggedIn: req.session.isLoggedIn });
  }
  next();
};

app.get("/", ifNotLoggedin, (req, res, next) => {
  dbConnection
    .execute("SELECT `name` FROM `users` WHERE `id`=?", [req.session.userID])
    .then(([rows]) => {
      res.render("Pages/index", {
        name: rows[0].name,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
});
app.get("/Kultura", ifNotLoggedin, (req, res, next) => {
  dbConnection
    .execute("SELECT `name` FROM `users` WHERE `id`=?", [req.session.userID])
    .then(([rows]) => {
      res.render("Pages/Kultura", {
        name: rows[0].name,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
});
app.get("/KasVyksta", ifNotLoggedin, (req, res, next) => {
  dbConnection
    .execute("SELECT `name` FROM `users` WHERE `id`=?", [req.session.userID])
    .then(([rows]) => {
      res.render("Pages/KasVyksta", {
        name: rows[0].name,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
});
app.get("/LankytinosVietos", ifNotLoggedin, (req, res, next) => {
  dbConnection
    .execute("SELECT `name` FROM `users` WHERE `id`=?", [req.session.userID])
    .then(([rows]) => {
      res.render("Pages/LankytinosVietos", {
        name: rows[0].name,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
});
app.get("/Saviveiklos", ifNotLoggedin, (req, res, next) => {
  dbConnection
    .execute("SELECT `name` FROM `users` WHERE `id`=?", [req.session.userID])
    .then(([rows]) => {
      res.render("Pages/Saviveiklos", {
        name: rows[0].name,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
});

app.post(
  "/register",
  ifLoggedin,
  [
    body("email", "Invalid email address!")
      .isEmail()
      .custom((value) => {
        return dbConnection
          .execute("SELECT `email` FROM `users` WHERE `email`=?", [value])
          .then(([rows]) => {
            if (rows.length > 0) {
              return Promise.reject("This E-mail already in use!");
            }
            return true;
          });
      }),
    body("username", "Username is Empty!").trim().not().isEmpty(),
    body("pwd", "The password must be of minimum length 6 characters")
      .trim()
      .isLength({ min: 6 }),
  ],
  (req, res, next) => {
    const validation_result = validationResult(req);
    const { username, pwd, email } = req.body;
    if (validation_result.isEmpty()) {
      bcrypt
        .hash(pwd, 12)
        .then((hash_pass) => {
          dbConnection
            .execute(
              "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
              [username, email, hash_pass]
            )
            .then((result) => {
              res.send(
                `your account has been created successfully, Now you can <a href="/">Login</a>`
              );
            })
            .catch((err) => {
              if (err) throw err;
            });
        })
        .catch((err) => {
          if (err) throw err;
        });
    } else {
      let allErrors = validation_result.errors.map((error) => {
        return error.msg;
      });
      res.render("pages/index", {
        isLoggedIn: req.session.isLoggedIn,
        register_error: allErrors,
        old_data: req.body,
      });
    }
  }
);

app.post(
  "/",
  ifLoggedin,
  [
    body("email").custom((value) => {
      return dbConnection
        .execute("SELECT `email` FROM `users` WHERE `email`=?", [value])
        .then(([rows]) => {
          if (rows.length == 1) {
            return true;
          }
          return Promise.reject("Invalid Email Address!");
        });
    }),
    body("pwd", "Password is empty!").trim().not().isEmpty(),
  ],
  (req, res) => {
    const validation_result = validationResult(req);
    const { pwd, email } = req.body;
    if (validation_result.isEmpty()) {
      dbConnection
        .execute("SELECT * FROM `users` WHERE `email`=?", [email])
        .then(([rows]) => {
          bcrypt
            .compare(pwd, rows[0].password)
            .then((compare_result) => {
              if (compare_result === true) {
                req.session.isLoggedIn = true;
                req.session.userID = rows[0].id;
                res.redirect("/");
              } else {
                res.render("pages/index", {
                  isLoggedIn: req.session.isLoggedIn,
                  login_errors: ["Invalid Password!"],
                });
              }
            })
            .catch((err) => {
              if (err) throw err;
            });
        })
        .catch((err) => {
          if (err) throw err;
        });
    } else {
      let allErrors = validation_result.errors.map((error) => {
        return error.msg;
      });
      res.render("pages/index", {
        login_errors: allErrors,
        isLoggedIn: req.session.isLoggedIn,
      });
    }
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.status(404).send("<h1>404 Page Not Found!</h1>");
});

app.listen(3000, () => console.log("Server is Running..."));
