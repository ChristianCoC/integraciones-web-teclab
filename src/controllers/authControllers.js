import jwt from "jsonwebtoken";
import { usuarios } from "../data/usuarios.js";

export const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email y password requeridos" });
    }

    const user = usuarios.find((u) => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: "Email o password incorrectos" });
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        return res.status(500).json({ error: "Error: Secret de JWT no configurado" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }  // ← Directamente aquí en lugar de process.env
    );

    res.json({
        message: "Login exitoso",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,          
        }
    });
};