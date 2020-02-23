import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props){
        super(props)
        this.state={
            clicked:{id:0,
            value:true}
        }
        this.productClicked  = this.productClicked.bind(this)
    }
    productClicked(i){
        this.setState({clicked:{id:i,value:true}})
        this.props.productToDisplay(i)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.products.length !== this.props.products.length){
            this.setState({clicked:{id:0,value:true}})

        }
        return true
    }
    render() {
        let productsList = this.props.products.map((products,i)=><li className="list-group-item" key={i}
        style={{backgroundColor:this.state.clicked.id===i && this.state.clicked.value?'#17a2b8':null}} onClick={()=>this.productClicked(i)}>{products.name}<span
        style={{float:'right'}}>${products.price}</span></li>)
        return (
            <div>
                <nav className="navbar navbar-light " style={{backgroundColor:'#17a2b8',paddingTop:'0px',paddingBottom:'0px'}}>
                    <span className="navbar-brand mb-0 h1"  style={{color:"antiquewhite",fontSize:"20px"}}>Products</span>
                </nav>
                <ul className="list-group" style={{margin:'20px'}}>
                {productsList}
                </ul>
            </div>
        )
    }
}
