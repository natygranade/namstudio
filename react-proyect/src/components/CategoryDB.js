import React, {Component} from 'react'
import Category from './Category'


class CategoryDB extends Component {
    constructor(){
        super()
        this.state ={
            categories: []
        }
    }
    
    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount (){
        this.bringCategory()  
    }  
    
    bringCategory (){
        this.apiCall('http://localhost:8000/api/products/categories', this.showCategory)
    }
    
    showCategory = (data) => {
        
        let categoryNames = []
        for(let i=0;i<data.length;i++){
            categoryNames.push(data[i].name)
        }
        this.setState({
            categories: categoryNames
        })
    }
    
    render (){
        let categoriesArray = this.state.categories
        
        return(
            
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
            
            <Category name={categoriesArray}/>
            </div>
            </div>
            </div>           
            
            )
        }
    }
    
    export default CategoryDB