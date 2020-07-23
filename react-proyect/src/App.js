import React, {Component} from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Card from './components/Card'
import ProductDB from './components/ProductDB'
import CategoryDB from './components/CategoryDB'

class App extends Component {
  constructor(){
    super();
    this.state ={
      lastProduct: "",
      productTotal: "",
      totalPrice: "",
      users: "",
      categoryLastProduct: ""
    }
  }
    apiCall(url, consecuencia){
      fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
    }

  componentDidMount (){
this.bringProducts() 
this.bringUsers () 
}  

bringProducts (){
  this.apiCall('http://localhost:8000/api/products', this.showProduct)
}

showProduct = (data) => {
  let total = data.length
  let amount = []
 for(let i=0;i<data.length;i++){
amount.push(data[i].price)
  }
let sum = amount.reduce((a,b)=> a+b)
this.setState({
  lastProduct: data[total-1],
  productTotal: total,
  totalPrice: sum,
  categoryLastProduct: data[total-1].category
 })
}

bringUsers  (){
  this.apiCall('http://localhost:8000/api/users', this.showUser)
}

showUser = data =>{
  let total = data.length
  this.setState ({
    users: total
  })
}
  render (){
  return (
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Navbar />
    <div className="container-fluid">

<div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
</div>
<div className="row">
<Card color="primary" title= "Products in Data Base" number={this.state.productTotal} icon="fas fa-clipboard-list fa-2x text-gray-300"/>
<Card color="success" title= "Amount in products" number={this.state.totalPrice} icon="fas fa-dollar-sign fa-2x text-gray-300"/>
<Card color="warning" title= "Users quantity" number={this.state.users}  icon="fas fa-user-check fa-2x text-gray-300"/>
  
</div>
<div className="row">
  <ProductDB  product ={this.state.lastProduct} category={this.state.categoryLastProduct}/>
  <CategoryDB />
   </div>
    </div>
    </div>
    </div>
    </div>
    );
  }
}
  export default App;
  