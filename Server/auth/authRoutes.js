const express = require("express");
const Joi = require("Joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../database/tilkobling.js");

const users = db.get('users');

users.createIndex("email", { unique: true});

const authRouter = express.Router();


const registerSchema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).max(32).required()
});

/* Routes for det som kommer etter /auth */

authRouter.get("/", (req, res) => {
    res.json({
        message: "/registrer for registrering. - /loggin for å logge inn."
    })
});

authRouter.post("/register/", (req, res, next) => {
    const regIn = Joi.validate(req.body, registerSchema);
    if(regIn.error === null){
      /* Her skal det sjekkes om email er unik */
      users.findOne({
        email: req.body.email
      }).then(user => {
        /* Hvis epost er udefinert betyr det at epost ikke er i db, hvis den er så dublikert epost funnet. */
          if(user){
          //    Hvis denne er sann betyr det at det finnes allerede en lik epost i db.
              const error = new Error("This email is already registered");
              res.status(409);
              next(error);
          }else{
            bcrypt.hash(req.body.password.trim(), 12).then(hashedPassord => {
                const nyBruker ={
                    email: req.body.email,
                    password: hashedPassord
                };
                users.insert(nyBruker).then(innsattBruker => {
                    delete(innsattBruker.password);
                    res.json({
                        innsattBruker
                    })
                });
            }
            )
          }
      })
    }else{
        res.status(422);
        next(res.error);
    }
});

authRouter.post("/login", (req, res, next) => {
    const regIn = Joi.validate(req.body, registerSchema);
    if(regIn.error === null){
        users.findOne(
            {
                    email:req.body.email,
                }).then(user =>{
                    if(user){
                        bcrypt.compare(req.body.password, user.password)
                            .then((result) => {
                               if(result){
                                    const payload = {
                                        _id: user._id,
                                        email: user.email
                                    };
                                    jwt.sign(payload, process.env.JWT_SECRET, {
                                        expiresIn: '1d'
                                    },(err, token) => {
                                        if(err){
                                            errorCode422(res, next);
                                        }else{
                                            res.json({
                                                token
                                            });
                                        }
                                    });
                               }else{
                                   errorCode422(res, next);
                               }
                        });
                    }else{
                        errorCode422(res, next);
                    }
        })
    }else{
        errorCode422(res, next);

    }

});

function errorCode422(res, next){
    res.status(422);
    const error = new Error('Unable to login.');
    next(error);
}

module.exports = authRouter;
