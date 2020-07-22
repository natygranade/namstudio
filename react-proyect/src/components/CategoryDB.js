import React, {Component} from 'react'
import Category from './Category'


class CategoryDB extends Component {
  constructor(){
      super()
      this.state ={
          categories: ""
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
}  

bringProducts (){
this.apiCall('http://localhost:8000/api/products/categories', this.showCategory)
}

showCategory = (data) => {

let categoryNames = []
for(let i=0;i<data.length;i++){
    categoryNames.push(data[i].name)
}

this.setState({
categories: data.name
})
}

    render (){
    return(
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div className="card-body">
									<div className="row">
									<Category name="Category 01"/>
                                    <Category name="Category 02"/>
                                    <Category name="Category 03"/>
                                    <Category name="Category 04"/>
                                    <Category name="Category 05"/>
                                    <Category name="Category 06"/>		
											
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    

    )
       }
    }

export default CategoryDB