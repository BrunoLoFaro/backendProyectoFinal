export function getLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        console.log('Usuario logueado');
        res.json(user);
    } else {
        console.log('Usuario no logueado');
        res.redirect('/');
    }
}

export function postLogin(req, res){
    let user = req.user;
    user.visitas++;
    res.redirect('/datos');
}

export function checkAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    } else {
        res.redirect('/');
    }
}