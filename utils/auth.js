const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/redirect')
    } else {
        next();
    }
}

module.exports = withAuth;