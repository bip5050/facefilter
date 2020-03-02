import React, { Component } from 'react'
import '../style/ProductMenu.style.css'

export default class ProductMenu extends Component {

    handleClick = (data, e) => {
        console.log(data);
        this.props.onProductSelected(data)
    }

    productDisplayList = () => {
        return this.props.products.map(product => {
            if (product.category === this.props.productCategory) {
                return (
                    <span key={product.id} className="productMenuItem" style={this.props.currentProduct != null && this.props.currentProduct.id === product.id ? { fontWeight: 'bold' } : { fontWeight: 'normal' }} onClick={this.handleClick.bind(this, product)}>{product.name}</span>
                )
            }
        })
    }
render (){
    
    return(
        <div className = "productMenu" >
            { this.productDisplayList() }
            </div>
        )
    }
}