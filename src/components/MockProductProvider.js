import {Product, ProductCategories, ProductData} from './Products'

var productCount = 0;

function id() {
    return productCount++
}

function MakeProduct(...vars){
    return Product(id(), ...vars)
}

const ProductList = [
    MakeProduct(ProductCategories.EYEWEAR, 'Navigator', 'products/eyewear/navigator/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/eyewear/navigator/model.obj', 'products/eyewear/navigator/texture.jpg',1,'products/eyewear/navigator/texture.jpg',.2)),
    MakeProduct(ProductCategories.EYEWEAR, 'Lovely', 'products/eyewear/lovely/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/eyewear/lovely/model.obj', 'products/eyewear/lovely/texture.jpg',1, 'products/eyewear/lovely/texture.jpg', .2)),
    MakeProduct(ProductCategories.LIPSTICK, 'Charm', 'products/lipstick/charm/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/lipstick/charm/model.obj', 'products/lipstick/charm/texture.png',.3, null, 1)),
    MakeProduct(ProductCategories.LIPSTICK, 'Glam', 'products/lipstick/glam/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/lipstick/glam/model.obj', 'products/lipstick/glam/texture.png',.5, null, 1)),
    MakeProduct(ProductCategories.LIPSTICK, 'Pinup', 'products/lipstick/pinup/preview.jpg', 
        ProductData([0,0,0], [0,0,0,0], [1,1,1], 'products/lipstick/pinup/model.obj', 'products/lipstick/pinup/texture.png',.2, null, 1))
]

export default ProductList
