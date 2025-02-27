export const Autherize = (req , res, next) =>{
    console.log("Autherize", req.role);
    if(req.role !== "admin" && req.role !== "manager") {
        return res.status(400).send({
            success: false,
            message: "You are not Authorized"
        })
    } 

    next();
} 