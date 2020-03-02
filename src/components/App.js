import React, { Component } from 'react';
import Header from './Header'
import CameraPermissionOverlay from './CameraPermissionOverlay'
import CameraButton from './CameraButton'
import SharingModal from './SharingModal'
import { ProductCategories } from './Products'
import  ProductList from './MockProductProvider'
import ProductMenu from './ProductMenu'
import FaceFilter from './FaceFilter'
import init from "../js/render.js";


export default class App extends Component {

  state = {
    displayOverlay: true,
    displaySharingModal: false,
    currentProductCategory:  ProductCategories.EYEWEAR,
    currentProduct: 0,
    products: ProductList
  }

  initApp = (e) => {
    e.preventDefault()
    this.setState({ displayOverlay: false })
  init();
    console.log("App init happens here");
  }

  closeSharingModal = (e) => {
    e.preventDefault()
    this.setState({displaySharingModal: false})
  }

  onProductSelected = (payload) => {
    this.setState({currentProduct: payload});

  }

  onCategorySelected = (e) => {
    this.setState({currentProductCategory: e.value});
  }

  render() {
    return (
      <div className="App">
        <CameraPermissionOverlay display={this.state.displayOverlay} onClose={this.initApp} />
        <Header currentProductCategory={this.state.currentProductCategory} onCategorySelected={this.onCategorySelected} />
        <ProductMenu productCategory={this.state.currentProductCategory} products={this.state.products} currentProduct={this.state.currentProduct} onProductSelected={this.onProductSelected} />
        <FaceFilter/>
        <CameraButton />
        <SharingModal showModal={this.state.displaySharingModal} onClose={this.closeSharingModal} />
      </div>

    );
  }
}
