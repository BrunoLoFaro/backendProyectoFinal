function getLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        console.log('Usuario logueado');
        res.json(user);
    } else {
        console.log('Usuario no logueado');
        res.redirect('/');
    }
}

function postLogin(req, res){
    let user = req.user;
    user.visitas++;
    res.redirect('/datos');
}

export const loginRouter = { getLogin, postLogin}