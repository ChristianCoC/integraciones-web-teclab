import { usuarios } from "../data/usuarios.js";

export const getUsers = (req, res) => {
    const { page, pageSize } = req.query;
    
    if (!page || !pageSize) {
        return res.json(usuarios);
    }

    const pageNum = parseInt(page);
    const pageSizeNum = parseInt(pageSize);

    if (isNaN(pageNum) || isNaN(pageSizeNum) || pageNum < 1 || pageSizeNum < 1) {
        return res.status(400).json({ error: "Parámetros de inválidos. Use: ?page=1&pageSize=10" });
    }

    const limitedPageSize = Math.min(pageSizeNum, 100);

    const startIndex = (pageNum - 1) * limitedPageSize;
    const paginatedUsers = usuarios.slice(startIndex, startIndex + limitedPageSize);

    res.json({
        page: pageNum,
        pageSize: limitedPageSize,
        total: usuarios.length,
        users: paginatedUsers
    });
};

export const getUsersById = (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
        return res.status(400).json({ error: "ID de usuario inválido" });
    }

    const user = usuarios.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
};
