


const errorMiddlewareHandler = (err,req,res,next) => {
    const errorstatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(errorstatusCode);
    res.json({
        message: err.message
    })
}

module.exports = {errorMiddlewareHandler}