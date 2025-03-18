import jwt from "jsonwebtoken";

export const generateJwtToken = (res, userId, role, email) => {
    const payload = { userId, role, email };

    const jwtToken = jwt.sign(payload, process.env.JWTTOKEN, { expiresIn: "7d" });

    res.cookie("token", jwtToken, {
        sameSite: "lax", // Allows cookies across subdomains (use 'none' for cross-origin with credentials)
        secure: process.env.NODE_ENV === "production", // Must be false for local development
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
    });
    // console.log("Token Sent")

   //  res.json({ success: true, token: jwtToken }); // Also return the token as a response for debugging
};
