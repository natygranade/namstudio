import React from 'react'

function DesignCard (props){

    return(
        <div className="row">
        {props.name.map( (design,i) =>
            <div key={design + 1 +i} className="col-lg-6 mb-4">
            <div key={design + 2 +i} className="card bg-info text-white shadow">
            <div className="card-body" key={design + i}>{design} </div>
            </div>
            </div>
            )
        }
        
        
        </div>
        )
    }
    
    export default DesignCard