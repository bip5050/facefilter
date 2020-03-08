import { Product, ProductCategories, ProductData } from './Products'

var productCount = 0;

function id() {
    return productCount++
}

function MakeProduct(...vars) {
    return Product(id(), ...vars)
}

const ProductList = [
    MakeProduct(ProductCategories.EYEWEAR, 'Navigator', 'products/eyewear/navigator/preview.jpg',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], 'products/eyewear/navigator/model.obj', [
            {
                maps: [],
                normalMap: null,
                envMap: 'products/envmap.jpg',
                opacity: .3,
                metalness: 1,
                roughness: 0,
                transparent: true

            },
            {
                maps: ['products/eyewear/navigator/texture.jpg'],
                normalMap: null,
                envMap: 'products/envmap.jpg',
                opacity: 1,
                metalness: 1,
                roughness: 0,


            }
        ])),
    MakeProduct(ProductCategories.HEADSET, 'demoset', 'products/headset/navigator/preview.jpg',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], 'products/headset/model.obj', [
            {
                maps: [],
                normalMap: null,
                envMap: 'products/envmap.jpg',
                opacity: .6,
                metalness: 0,
                roughness: 0,
                transparent: true

            },
            {
                maps: ['products/eyewear/navigator/texture.jpg'],
                normalMap: null,
                envMap: 'products/envmap.jpg',
                opacity: 1,
                metalness: 1,
                roughness: 0,


            }
        ])),
    MakeProduct(ProductCategories.EYEWEAR, 'Lovely', 'products/eyewear/lovely/preview.jpg',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], 'products/eyewear/lovely/model.obj',
            [
                {
                    maps: [],
                    normalMap: null,
                    envMap: 'products/envmap.jpg',
                    opacity: .3,
                    metalness: 1,
                    roughness: 0,
                    transparent: true

                },
                {
                    maps: ['products/eyewear/lovely/texture.jpg'],
                    normalMap: null,
                    envMap: 'products/envmap.jpg',
                    opacity: 1,
                    metalness: 1,
                    roughness: 0,


                }
            ]

        )),
    MakeProduct(ProductCategories.LIPSTICK, 'Charm', '',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], '',
            [
                {
                    maps: ['products/lipstick/charm/texture.png'],
                    normalMap: null,
                    opacity: .3,
                    metalness: 0,
                    roughness: 1,
                    transparent: true


                }
            ]
        )),

    MakeProduct(ProductCategories.MASCARA, 'Charm', '',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], '',
            [
                {
                    maps: ['products/mascara/texture.png'],
                    normalMap: null,
                    opacity: 1,
                    metalness: 0,
                    roughness: 1,
                    transparent: true


                }
            ]
        )),
    MakeProduct(ProductCategories.EYEBROW, 'Glam', '',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], '',
            [
                {
                    maps: ['products/eyebrows/texture.png'],
                    normalMap: null,
                    opacity: 1,
                    metalness: 0,
                    roughness: 1,
                    transparent: true


                }
            ]
        )),
    MakeProduct(ProductCategories.LIPSTICK, 'Glam', 'products/lipstick/glam/preview.jpg',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], 'products/lipstick/glam/model.obj', [
            {
                maps: ['products/lipstick/glam/texture.png'],
                normalMap: null,
                envMap: null,
                opacity: .3,
                metalness: 0,
                roughness: 1,
                transparent: true


            }
        ])),
    MakeProduct(ProductCategories.LIPSTICK, 'Pinup', 'products/lipstick/pinup/preview.jpg',
        ProductData([0, 0, 0], [0, 0, 0, 0], [1, 1, 1], 'products/lipstick/pinup/model.obj',
            [
                {
                    maps: ['products/lipstick/pinup/texture.png'],
                    normalMap: null,
                    envMap: null,
                    opacity: .3,
                    metalness: 0,
                    roughness: 1,
                    transparent: true


                }
            ]
        ))
]

export default ProductList
