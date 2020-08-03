import React, {Component} from 'react'

class Sidebar extends Component {
    constructor(){
        super();
        this.state ={
            
        }
    }
    
showDesigns(){
    
document.getElementById("main").style.display="none"
document.getElementById("designs").style.display="block"
}
 
   render(){
    return(
   
       <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

       {/* Sidebar - Brand  */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
        </a>

       {/* Divider  */}
        <hr className="sidebar-divider my-0"></hr>

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

         {/* Divider */} 
        <hr className="sidebar-divider"></hr>

         {/* Heading */}
        <div  className="sidebar-heading">Actions</div>

         {/* Nav Item - Pages*/} 
        <li  className="nav-item">
            <p onClick={this.showDesigns} className="nav-link collapsed" >
            <i className="fas fa-palette"></i>
               <span>Designs</span> 
            </p>
        </li>

         {/* Nav Item - Charts  */}
        <li className="nav-item">
            <a className="nav-link" href="/">
            <i className="fas fa-users"></i>
                <span>Users</span></a>
        </li>

         {/*Nav Item - Tables */} 
        <li className="nav-item">
            <p className="nav-link">
            <i className="fas fa-shopping-basket"></i>
                <span>Purchases</span></p>
        </li>

        {/*Divider */}
        <hr className="sidebar-divider d-none d-md-block"></hr>
    </ul>
  
    )
   }
}

export default Sidebar