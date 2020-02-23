import React from 'react';
import Login from './components/auth/Login';
import axios from 'axios'
import ReactDOM from 'react-dom';
import ProductsManager from './components/productsDisplay/ProductsManager';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';



class App extends React. Component{
    constructor(props){
        super(props)
        this.state = {
            token:'',
            auth:false
        }
        this.login = this.login.bind(this); 
        this.logout = this.logout.bind(this); 

    }

    login(e,username,password) {
        e.preventDefault()
        console.log('sdfgf',this.state)
        axios.post('http://localhost:8080/api/users/login',{
            "username": username,
		"password": password
        }).then(res=>{
            console.log(res.data)
            this.setState({token:res.data.id,auth:true})
        })
        
    }
    logout(){
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': this.state.token
        }
        console.log(headers)
        axios.post('http://localhost:8080/api/users/logout',null,{headers:headers}).then((res)=>{
          console.log(res)
          this.setState({auth:false})
          console.log(this.props)
          
        }).catch((err)=>{
          console.log(err)
        })
      
      }

    render(){
        let loginPage = <Login login={this.login}></Login>
        let productManagerPage = <Route path="/productManager"  render={() => <ProductsManager id={this.state.token}  auth={this.state.auth} logout={this.logout}></ProductsManager>}/>

        return(
           
            <div className="App">
            <BrowserRouter>
                <Switch>
                <Redirect from="/" exact to="/login" />
                <Route path="/login"  render={(props) => <Login {...props} auth={this.state.auth} login={this.login}></Login>}/>
            {!this.state.auth?<Redirect from="/productManager" exact to="/login" />:null }
               
                {this.state.auth?productManagerPage:loginPage}
                </Switch>
            </BrowserRouter>
            
    </div>

        )

    }

}




ReactDOM.render(<App />, document.getElementById('app'))