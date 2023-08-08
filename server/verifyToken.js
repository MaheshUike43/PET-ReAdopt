import jwt from 'jsonwebtoken'

function verify(req,res,next){
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token, process.env.MY_KEY, (err, user) => {
            // console.log(user);
            if(err) res.status(403).json("You are not authorized");
            req.user = user;
            console.log(user)
            next();
        });
    }else{
        res.status(401).json("You are not authenticated");
    }
}

export default verify;