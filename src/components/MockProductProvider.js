import {Product, ProductCategories, ProductData} from './Products'

var productCount = 0;

function id() {
    return productCount++
}

function MakeProduct(...vars){
    return Product(id(), ...vars)
}

const ProductList = [
    MakeProduct(ProductCategories.EYEWEAR, 'Wayfarer', 'products/eyewear/wayfarer/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/eyewear/wayfarer/model.obj', 'products/eyewear/wayfarer/texture.jpg',1)),
    MakeProduct(ProductCategories.EYEWEAR, 'Aviator', 'products/eyewear/aviator/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/eyewear/aviator/model.obj', 'products/eyewear/aviator/texture.jpg',1)),
    MakeProduct(ProductCategories.BEAUTY, 'Clash', 'products/beauty/clash/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/clash/aviator/model.obj', 'products/beauty/clash/texture.png',.2))
]

export default ProductList
