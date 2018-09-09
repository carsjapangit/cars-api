const { Product }          = require('../models');
const productService       = require('../services/product.service');
const { to, ReE, ReS }  = require('../services/util.service');

const create = async function(req, res){
    const body = req.body;
    if(!body.stockNo){
        return ReE(res, 'Please enter Stock No.');
    }else{
        let err, product;
        [err, product] = await to(productService.createProduct(body));
        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new Product with stock no '+product.stockNo}, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let products;
      [err, products] = await to(Product.findAll());
      if(err)    return ReE(res, err);
    return ReS(res, {productList:products});
}
module.exports.get = get;
