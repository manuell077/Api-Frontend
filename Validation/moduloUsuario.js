

export const validar = (e)=>{
    e.preventDefault();

   const campos = [...e.target].filter((elemento)=>{
     return  elemento.hasAttribute('required')
   })
    
   
    campos.forEach(campo => {
      
        switch(campo.tagName){
            case "INPUT":
            
            
            if(!campo.value || campo.value == ""){
                campo.classList.add("errorCampo")
            }
        }
   });


}