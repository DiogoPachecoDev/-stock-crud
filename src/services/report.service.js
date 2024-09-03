const createError = require('http-errors');
const reportRepository = require('../repositories/report.repository');

const entrieExit = async function(filters) {
    let sqlFilter = String();

    if(filters.initialDate && filters.initialDate.trim()) {
        sqlFilter += ` AND rp.createdAt >= '${filters.initialDate} 00:00:00' `;
    }
    
    if(filters.endDate && filters.endDate.trim()) {
        sqlFilter += ` AND rp.createdAt <= '${filters.endDate} 23:59:59' `;
    }
    
    if(filters.name && filters.name.trim()) {
        sqlFilter += ` AND rp.name LIKE '%${filters.name}%' `;
    }
    
    if(filters.type && filters.type.trim()) {
        sqlFilter += ` AND rp.type = '${filters.type}' `;
    }

    if(filters.initialQuantity && filters.initialQuantity.trim()) {
        sqlFilter += ` AND rp.quantity >= ${filters.initialQuantity} `;
    }
    
    if(filters.endQuantity && filters.endQuantity.trim()) {
        sqlFilter += ` AND rp.quantity <= ${filters.endQuantity} `;
    }
    
    if(filters.initialPrice && filters.initialPrice.trim()) {
        sqlFilter += ` AND rp.price >= ${filters.initialPrice} `;
    }
    
    if(filters.endPrice && filters.endPrice.trim()) {
        sqlFilter += ` AND rp.price <= ${filters.endPrice} `;
    }
    
    const data = await reportRepository.entrieExit(sqlFilter);

    return data;
}

module.exports = {
    entrieExit
}
