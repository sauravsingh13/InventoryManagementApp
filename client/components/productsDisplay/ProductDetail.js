import React, { Component } from 'react'
import ProductRating from './ProductRating';

export default class ProductDetail extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
            rating:'1'
        }
        this.addProduct = this.addProduct.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.cancel = this.cancel.bind(this)
        this.input = this.input.bind(this);
        this.rating = this.rating.bind(this);  
  
    }

    input(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.product)
        this.setState({name:nextProps.product.name,price:nextProps.product.price,rating:nextProps.product.rating})
    }

    addProduct(){
        if(this.state.name){
            this.props.addProduct(this.state)
        }
    
    }
    saveProduct(){
            this.props.saveProduct(this.state)
    }

    deleteProduct(){
        this.props.deleteProduct()
    }
    cancel(){
        this.setState({name:this.props.product.name,price:this.props.product.price,rating:this.props.product.rating})
    }
    rating(e){
        let rating = e.target.value;

        this.setState({rating:rating})
        console.log('sd',this.state.rating)
    }

    render() {
        return (
            <div style={{ marginTop: "20px", border: '2px solid #17a2b8' }}>
                <nav className="navbar navbar-light " style={{ backgroundColor: '#17a2b8', paddingTop: '0px', paddingBottom: '0px' }}>
                    <span className="navbar-brand mb-0 h1" style={{ color: "antiquewhite", fontSize: "20px" }}>Product Detail</span>
                    <span className="float-right mb-0 h1" style={{ color: "antiquewhite", fontSize: "20px" }}>
                    {this.props.product?this.props.product.name+'(Product ID - '+this.props.product.id+')':'Product'}
                    </span>
                </nav>
                <form style={{ margin: "20px" }}>
                    <div className="form-group">
                        <label htmlFor="name" className="float-left">Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.input} value={this.state.name}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className="float-left">Price</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>

                            <input type="text" className="form-control" name="price"  onChange={this.input} value={this.state.price}></input>
                        </div>
                    </div>
                </form>
                <ProductRating rating={this.state.rating} ratingFunction={this.rating}></ProductRating>
                <div className="bg-light" style={{height:'61px',padding:'11px'}}>
                    <button type="button" className="btn btn-warning float-right" onClick={this.cancel} style={{marginLeft:'10px'}}>Cancel</button>
                    <button type="button" className="btn btn-danger  float-right"  onClick={this.deleteProduct} style={{marginLeft:'10px'}}>Delete</button>
                    <button type="button" className="btn btn-primary  float-right" onClick={this.addProduct} style={{marginLeft:'10px'}}>Add</button>
                    <button type="button" className="btn btn-success  float-right"  onClick={this.saveProduct} style={{marginLeft:'10px'}}>Save</button>
                </div>
            </div>
        )
    }
}
