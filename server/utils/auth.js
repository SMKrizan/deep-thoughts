const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = `${process.env.SECRET}`;
const expiration = '2h';

module.exports = {
    // expects a user object
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function({ req }) {
        // enables token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separates 'Bearer' from '<tokenvalue>'
        if (req.headers.authorization) {
            token = token
            .split(' ')
            .pop()
            .trim();
        }

        // if no token, return request object as-is
        if (!token) {
            return req;
        }

        // verifies and gets user data from token
        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // returns updated request object
        return req;
    }
};