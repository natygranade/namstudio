import React from 'react'

function Category (props){
    
    return(
        <div className="row">
        {props.name.map( (category,i) =>
            <div key={category + 1 +i} className="col-lg-6 mb-4">
            <div key={category + 2 +i} className="card bg-info text-white shadow">
            
            <div className="card-body" key={category + i}>{category} </div>
            </div>
            </div>
            )
        }
        
        
        </div>
        )
    }
    
    export default Category