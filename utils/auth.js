const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/playdateform')
    } else {
        next();
    }
}

module.exports = withAuth;