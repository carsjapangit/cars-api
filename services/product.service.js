const { Product } 	    = require('../models');
const validator     = require('validator');
const { to, TE }    = require('../services/util.service');



const createProduct = async (productInfo) => {
    let stockNo, err;

    product_info={};
    product_info.status='create';
    stockNo = productInfo.stockNo;
    if(!stockNo) TE('Stock No is mandatory.');

    // create product in :
    [err, user] = await to(Product.create(productInfo));

    if(err) TE('Product already exists with that ID');

    return user;

}
module.exports.createProduct = createProduct;
