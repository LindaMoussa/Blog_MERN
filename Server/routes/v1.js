const express = require("express");
const router = express.Router();
const passport = require('passport');
const userController = require("../controllers/users");
const blogController = require("../controllers/blogs");

router.post("/signup", userController.register);
router.post("/signin", userController.login);
router.get("/home", blogController.getAll);
//homepage 

// Customize auth message Protect the  routes
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', {
        session: false
    }, (err, user) => {
        if (err || !user) {
            const error = new Error('You are not authorized to access this area');
            error.status = 401;
            throw error;
        }

        //
        req.user = user;
        return next();
    })(req, res, next);
});

// -------------- Protected Routes -------------- //

//user must be logged in to access this urls "auth"
router.get("/profile:user_id", blogController.getById);

router.post("/blog", blogController.create);
router.put("/blog:blog_id", blogController.update);
router.delete("/blog:blog_id", blogController.delete);
module.exports = router;