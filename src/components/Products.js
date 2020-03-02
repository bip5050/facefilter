const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))

const ProductCategories = {
    EYEWEAR:'Eyewear',
    LIPSTICK:'Lipstick'
}

const Product = Struct('id', 'category', 'name', 'previewImageUrl', 'data')
const ProductData = Struct('position', 'rotation', 'scale', 'modelUrl', 'textureUrl')

module.exports = {
    ProductCategories,
    Product,
    ProductData,
    Struct
}