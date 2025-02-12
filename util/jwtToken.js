import jwt from "jsonwebtoken"


export const generateJwtToken = (res, userId, role, email)=>{
    const payload = {
        "userId": userId,
        "role": role,
        "email": email
    }
 const jwtToken = jwt.sign(payload, process.env.JWTTOKEN,{
    expiresIn: "7d"
 })

 res.cookie("token",jwtToken,{
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000   
 })
}