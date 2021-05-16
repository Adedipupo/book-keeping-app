const jwt = require("jsonwebtoken");
const asycHandler = require("express-async-handler");


const authMiddleware = asycHandler(async (req, res,next) => {
    let token;
})