import jwt from "jsonwebtoken";

export const generateJwtToken = (res, userId, role, email) => {
    const payload = { userId, role, email };

    const jwtToken = jwt.sign(payload, process.env.JWTTOKEN, { expiresIn: "7d" });

    res.cookie("token", jwtToken, {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
        secure: process.env.NODE_ENV === "production", // true in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Required for cross-origin cookies
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
    });
    
    // console.log("Token Sent")

   //  res.json({ success: true, token: jwtToken }); // Also return the token as a response for debugging
};
