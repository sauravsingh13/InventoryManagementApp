import React, { Component } from 'react'

export default class ProductStock extends Component {
  render() {
    return (
        <div className="bg-light">
        <div style={{paddingTop:'15px',height:'50px',textAlign:'center'}}>ProductStock {this.props.stock}</div>
      </div>
    )
  }
}
