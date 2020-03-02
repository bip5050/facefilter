import {Product, ProductCategories, ProductData} from './Products'

var productCount = 0;

function id() {
    return productCount++
}

function MakeProduct(...vars){
    return Product(id(), ...vars)
}

const ProductList = [
    MakeProduct(ProductCategories.EYEWEAR, 'Wayfarer', './public/products/eyewear/wayfarer/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], './public/products/eyewear/wayfarer/model.json', './public/products/eyewear/wayfarer/texture.jpg')),
    MakeProduct(ProductCategories.EYEWEAR, 'Aviator', './public/products/eyewear/aviator/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], './public/products/eyewear/aviator/model.json', './public/products/eyewear/aviator/texture.jpg')),
    MakeProduct(ProductCategories.BEAUTY, 'Clash', './public/products/beauty/clash/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], './public/products/clash/aviator/model.json', './public/products/beauty/clash/texture.jpg'))
]

export default ProductList
