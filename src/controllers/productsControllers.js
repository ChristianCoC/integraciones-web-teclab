import { productos } from "../data/productos.js";

export const getProducts = (req, res) => {
    const { page, pageSize } = req.query;
    if (!page || !pageSize) {
        return res.json(productos);
    }

    const pageNum = parseInt(page);
    const pageSizeNum = parseInt(pageSize);

    if (isNaN(pageNum) || isNaN(pageSizeNum) || pageNum < 1 || pageSizeNum < 1) {
        return res.status(400).json({ error: "Parámetros de inválidos. Use: ?page=1&pageSize=10" });
    }

    const limitedPageSize = Math.min(pageSizeNum, 100);

    const startIndex = (pageNum - 1) * limitedPageSize;
    const paginatedProducts = productos.slice(startIndex, startIndex + limitedPageSize);

    res.json({
        page: pageNum,
        pageSize: limitedPageSize,
        total: productos.length,
        products: paginatedProducts
    });
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const productId = parseInt(id);

    if (isNaN(productId)) {
        return res.status(400).json({ error: "ID de producto inválido" });
    }

    const product = productos.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
};
