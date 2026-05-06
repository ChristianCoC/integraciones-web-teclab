import { miFacturacion } from "../data/facturacion.js";

export const getBillingInfo = (req, res) => {
    try {
        if (!miFacturacion || Object.keys(miFacturacion).length === 0) {
            return res.status(404).json({ 
                error: "Información de facturación no disponible" 
            });
        }

        res.status(200).json({
            message: "Información de facturación obtenida",
            data: miFacturacion
        });
    } catch (error) {
        res.status(500).json({ 
            error: "Error al obtener información de facturación" 
        });
    }
};

export const validateBillingInfo = (req, res) => {
    try {
        const requiredFields = ['name', 'document', 'email', 'phone', 'address', 'amount', 'concept'];
        const missingFields = requiredFields.filter(field => !miFacturacion[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                error: "Campos faltantes en facturación",
                missingFields
            });
        }

        res.status(200).json({
            message: "Facturación válida",
            isValid: true
        });
    } catch (error) {
        res.status(500).json({ 
            error: "Error validando facturación" 
        });
    }
};