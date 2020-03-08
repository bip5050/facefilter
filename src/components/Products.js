
const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => { o[k] = v[i]; return o }, {}))

const ProductCategories = {
    EYEWEAR: 'Eyewear',
    LIPSTICK: 'Lipstick',
    HEADSET:'HeadSet',
    MASCARA:'Mascara',
    EYEBROW:'Eyebrows'
}


const Product = Struct('id', 'category', 'name', 'previewImageUrl', 'data');
const ProductData = Struct('position', 'rotation', 'scale', 'modelUrl', 'materials');


module.exports = {
    ProductCategories,
    Product,
    ProductData,
    Struct
}