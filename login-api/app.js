const express = require("express");
const cors = require("cors");
//const jwt = require("jsonwebtoken")

const app = express();
app.use( express.json());
app.use(cors());

//const TOKEN_KEY = "x4TvnErxRETbVcqaLl5dqMI115eNlp5y";

// const verifyToken = ( req, res, next ) => {
//     const authheader = req.headers['authorization'];
//     const token = authheader && authheader.split('')[1];
//     console.log( authheader );
//     if ( token === null )
//     return res.status(401).send("Token requerido");
//     jwt.verify( token, TOKEN_KEY, (err, user) => {
//         if(err) return res.status(403).send("Token invalido");
//         console.log(user);
//         req.user = user;
//         next();
//     } ) 
// }

app.post("/auth/login", ( req, res ) => {
    const email = req.body.email;
    const password = req.body.password;

    if( email === 'admin@admin.com' && password === "Admin" ){
        const data = {
          
            email: "admin@admin.com",
            password: "Admin",
        };
    //    const token = jwt.sign(
    //     { userId: data.id, email:data.email },
    //     TOKEN_KEY,
    //     { expiresIn: "48h" }
    //    );
    //    let nDatos = { ...data, token }
        res.status(200).json(data);
    }else{
        res.status(400).send(" Credenciales incorrectas ")
    }
});

app.get('/usuario/:id/marvel', (req, res) => {
    const datos = [

        { id:1, cliente: "Empresa A", total: 2500, fecha: "01-05-2022" },
        { id:2, cliente: "Empresa A", total: 150, fecha: "02-05-2022" },
        { id:3, cliente: "Empresa A", total: 200, fecha: "03-05-2022" }
    ];
    res.json(datos);
});

app.listen( 4001, () => {
    console.log( 'Servidor iniciado en el puesto 4001' )
})

