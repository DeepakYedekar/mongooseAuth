const route = require("express").Router();
const { signIn, signUp } = require("../controller/user");

route.post('/signup', signUp);
route.post('/signin', signIn);

module.exports = {
    Auth:route
}