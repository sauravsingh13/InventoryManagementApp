import React, { Component } from 'react'
import Products from './Products';
import ProductStock from './ProductStock';
import ProductDetail from './ProductDetail';
import axios from 'axios'


export default class ProductsManager extends Component {
  constructor(props){
    super(props)
    this.state={
      productArray:[],
      productToDisplay:0,
      id:''
    }
    this.productToDisplay = this.productToDisplay.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.logout = this.logout.bind(this)


  }

  componentDidMount(){
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.props.id
    }
    axios.get('http://localhost:8080/api/products',{headers:headers}).then((res)=>{
      console.log(res)
      this.setState({productArray:res.data})
          this.setState({id:this.props.id})

    }).catch((err)=>{
      console.log(err)
    })
  }
  productToDisplay(i){
    this.setState({productToDisplay:i})
  }
  addProduct(product){
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.state.id
    }
    axios.post('http://localhost:8080/api/products',product,{headers:headers}).then((res)=>{
      console.log(res)
      this.setState({productArray:[...this.state.productArray,res.data]})
      console.log(this.state.productArray)
    }).catch((err)=>{
      console.log(err)
    })
  }
  saveProduct(product){

    
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.state.id
    }
    axios.put('http://localhost:8080/api/products/'+this.state.productArray[this.state.productToDisplay].id,product,{headers:headers}).then((res)=>{
      let newProductArray = this.state.productArray.map((product)=>{
          if(product.id == res.data.id)
            return res.data
            return product
      })
      this.setState({productArray:[...newProductArray]})
    }).catch((err)=>{
      console.log(err)
    })
  
  }

  deleteProduct(){
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.state.id
    }
    axios.delete('http://localhost:8080/api/products/'+this.state.productArray[this.state.productToDisplay].id,{headers:headers}).then((res)=>{
      this.setState({productToDisplay:0})

      let newProductArray = this.state.productArray.filter((product)=>{
          return product.id !== this.state.productArray[this.state.productToDisplay].id

      })
      this.setState({productArray:[...newProductArray]})
      console.log(this.state.productArray)
    }).catch((err)=>{
      console.log(err)
    })
  }

  logout(){
    this.props.logout()
    
  
  }
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-light " style={{backgroundColor:'#17a2b8',paddingTop:'0px',paddingBottom:'0px'}}>
  <span className="navbar-brand mb-0 h1" style={{color:"antiquewhite",fontSize:"27px"}}>Product Manager</span>
  <a className="nav-link" style={{color:'antiquewhite',fontSize:"27px",borderLeft:"2px solid rgba(0,0,0,0.2)",cursor:'pointer'}}
  onClick={this.logout}>Logout</a>
</nav>

        <div className="row">
            <div className="col-md-3" style={{margin:'30px',padding:'0',border:'2px solid #17a2b8'}}>
              <Products products={this.state.productArray} productToDisplay={this.productToDisplay}></Products>
            </div>
            <div className="col-md-8" style={{padding:'30px'}}>
              <ProductStock stock={this.state.productArray.length}></ProductStock>
              <ProductDetail product={this.state.productArray[this.state.productToDisplay]} 
              deleteProduct={this.deleteProduct} addProduct={this.addProduct} saveProduct={this.saveProduct}></ProductDetail>
            </div>
        </div>
      </div>
    )
  
  }}
