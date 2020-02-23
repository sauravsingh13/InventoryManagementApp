import React, { Component } from 'react'

export default class ProductRating extends Component {
    constructor(props){
        super(props)
        this.state={
            rating:1
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({rating:nextProps.rating})
    }
    componentDidMount(){
        this.setState({rating:this.props.rating})
    }
    render() {
        return (
            <div style={{ margin: "20px", border: '2px solid rgba(23, 162, 184,0.5)' }}>
                <nav className="navbar navbar-light " style={{ backgroundColor: 'rgba(23, 162, 184,0.5)', paddingTop: '0px', paddingBottom: '0px' }}>
                    <span className="navbar-brand mb-0 h1" style={{ color: "antiquewhite", fontSize: "20px" }}>Rating</span>
                </nav>

                <select className="form-control" value={this.state.rating} onChange={(e)=>this.props.ratingFunction(e)} style={{margin:"20px",width:"95%"}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
        )
    }
}
