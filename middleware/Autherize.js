export const Autherize = (req,res,next) =>{
    if(req.role !== "admin" && req.role !== "manager") {
        return res.status(400).send({
            success: false,
            message: "You are not Authorized"
        })
    } 

    next();
} 