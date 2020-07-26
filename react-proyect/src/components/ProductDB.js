import React from 'react'
import product from'../images/colorways-1594594589930.jpg'


function ProductDB (props){

    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 + 'rem'}} src={product} alt=""/>
                </div>
                <p>Poduct name: {props.product.name}</p>
                <p>Category: {props.category.name} </p>
            </div>
        </div>
    </div>
   
    )

}

export default ProductDB