const jwt = require('jsonwebtoken')

const authconfig = require('../config/auth.json');


module.exports = function (req, res, next) {

 const authHeader = req.headers.authorization;

    if (!authHeader)

        return res.status(401).send({ error: 'No token provied' })

    const parts = authHeader.split(' ');

    if (!parts.length === 2)

        return res.status(401).send({ error: 'Token error' });

        const [scheme , token ] = parts;


    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformatted'  })

        


    jwt.verify(token, authconfig.secret, (err, decoded) => {

        if (err) return res.status(401).send({ error: 'Token Invalid' })
        req.userId = decoded.id;
        return next();

    });
}
  // module.exports