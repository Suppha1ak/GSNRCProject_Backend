const { verifySignUp} = require('../middleware');
const controller = require('../controller/auth.controller');
module.exports = function(app){
    app.use(function(req, res , next) {
        res.header(
            "Access.Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/auth/signUp",
        [verifySignUp.checkUserOrEmail , verifySignUp.checkROLES],controller.signup
    )
    app.post(
        "/api/auth/signIn",
        controller.signIn
    )
    app.post(
        "/api/auth/refreshToken",
        controller.refreshToken
    )
}