import React, {Component} from 'react';
import DesignCard from './DesignCard';

class Designs extends Component {
    constructor(){
        super();
        this.state ={
            designs: [],
cw1:[]
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    
    componentDidMount (){
        this.bringPrducts()  
    }  
    
    bringPrducts (){
        this.apiCall('http://localhost:8000/api/products', this.showProducts)
    }
    
    showProducts = (data) => {
        
        let productName = []
        let productImage = []
        for(let i=0;i<data.length;i++){
            productName.push(data[i].name)
            productImage.push(data[i].image_path)
        }
        this.setState({
            designs: productName,
            cw1: productImage
        })
    }  


    render (){
        let designsArray = this.state.designs
        let imageArray = this.state.cw1
        return (
            <div id="designs" onLoad={this.hideDesigns} className="container">
<DesignCard image={imageArray} name={designsArray}/>

            </div>
            
            );
        }
    }
    export default Designs;