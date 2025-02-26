import jwt from "jsonwebtoken";

export const verifyToken = async (req ,res ,next)=>{
    try {
        const token = req.cookies.token;
        console.log("TOKEN: ", token);
        if(!token){
            return res.status(400).send({
                success: false,
                message: "No Token found",
            })
        }
        
        const decoded = jwt.verify(token, process.env.JWTTOKEN)

        if(!decoded) return res.status(400).send({
            success: false,
            message: "Not valid token"
        })
        req.userId = decoded.userId;
        req.role = decoded.role;
        req.email = decoded.email;

        next();
    } catch (error) {
        console.log("Error occured in verifyToken "+ error);
    }
}