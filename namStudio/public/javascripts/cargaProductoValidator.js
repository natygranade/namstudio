window.addEventListener('load', function(){
  let form = document.getElementById('form')
  
  form.name.addEventListener('keydown', function(e){
    
    if(e.target.value.length < 8){
      e.target.classList.add("is-invalid")
      
    } else {
      e.target.classList.replace("is-invalid","is-valid")
      
    }
  })
  
  form.size.addEventListener('keydown', function(e){
    
    if(e.target.value.length < 2){
      e.target.classList.add("is-invalid")
      form.submit.setAttribute("disabled", "")
    } else {
      e.target.classList.replace("is-invalid","is-valid")
      form.submit.removeAttribute("disabled")
    }
  })
  
  form.price.addEventListener('keydown', function(e){
    
    if(e.target.value.length < 1){
      e.target.classList.add("is-invalid")
      form.submit.setAttribute("disabled", "")
    } else {
      e.target.classList.replace("is-invalid","is-valid")
      form.submit.removeAttribute("disabled")
    }
  })
  
  form.submit.addEventListener('click', function(event){
    form.name.classList.remove("is-valid")
    form.size.classList.remove("is-valid")
    form.price.classList.remove("is-valid")
    
    document.querySelector('.alert').classList.remove("d-none")
    setTimeout(() => {
      document.querySelector('.alert').classList.add("d-none")
    }, 3000); 
    
  })
  
  
})
