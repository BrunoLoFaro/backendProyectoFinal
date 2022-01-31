export function getLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        res.json(user);
    } else {
        res.redirect('/');
    }
}

export function postLogin(req, res){
    res.json('loggeado');
}

export function failLogin(req, res){
    res.json('login fallado');
}

export function getSignUp(req, res){
    res.redirect('/register.html');
}

export function postSignUp(req, res){
    res.json('signup done');
}

export function failSignUp(req, res){
    res.json('signup fallado');
}

export function logout(req, res){
    req.logout();
    res.json('desloggeado');
}

export function failRoute(req, res){
    res.status(404).send('Ruta no encontrada');
}

export function getRutaProtegida(req, res){
    res.send('<h1>Pude ingresar a la ruta protegida</h1>');
}

export function datos(req,res){
        let user = req.user;
        res.json(user);
}

export function checkAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    } else {
        res.json('debe loggearse');
    }
}