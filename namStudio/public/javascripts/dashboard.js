
window.addEventListener('load', function (){
    
    fetch("http://localhost:8000/api/users/logedUser")
    .then(response =>  response.json())
    .then(data => {
        console.log(data)
        if(data.admin){
            let dashboard = document.getElementById('dashboard')
            
            dashboard.classList.remove("d-none")
            dashboard.setAttribute("href","/dashboard")
            
        }
    })
    
    
    
})
