import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token de autenticación requerido" });
    }

    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token de autenticación expirado" });
        }
        return res.status(403).json({ error: "Token de autenticación inválido" });
    }
};