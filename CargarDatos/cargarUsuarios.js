import {get} from "../Api.js"



export const cargarCiudades = async ()=>{

    const ciudades =await get("ciudades")
    
    const select = document.querySelector('#ciudadeSelect')

     ciudades.data.forEach(ciudad =>{
        let opcion = document.createElement("option")
        opcion.textContent = ciudad.ciudad;
        opcion.setAttribute('name',"ciudad")
        opcion.setAttribute('required',true)
        opcion.setAttribute('value',ciudad.id_ciudad)
        select.append(opcion)
     })

}


export const cargarGenero = async ()=>{
    const generos = await get("generos")
    const  radioContenedor = document.querySelector('.radios')
    
     
    if(generos.data.length>0){

        generos.data.forEach(genero =>{

            const divRadio = document.createElement('div')
            divRadio.classList.add('radiosContenido')
            
            const radio = document.createElement("input")
            radio.setAttribute('type','radio')
            radio.setAttribute('id',genero.genero)
            radio.setAttribute('name',"id_genero")
            radio.setAttribute('required',true)
            radio.setAttribute('value',genero.id_genero)
            divRadio.append(radio)

            const label  = document.createElement("label") 
            label.setAttribute('for',genero.genero)
            label.textContent= genero.genero
            divRadio.append(label)   
        




            radioContenedor.append(divRadio)
            

        })
    }
    

}

export const cargarLenguajes = async ()=>{

    const lenguajes = await get('lenguajes')

    const selectorLenguajes = document.querySelector('.lenguajes')
     
    

    lenguajes.data.forEach(lenguaje =>{

        const divLenguajes = document.createElement('div')
        divLenguajes.classList.add('.lenguajes__contenido')

        const check = document.createElement('input')
        check.setAttribute('type','checkbox')
        check.setAttribute('id',lenguaje.nombre_lenguaje) 
        check.setAttribute('name',"id_lenguaje")
        check.setAttribute('required',true)
        check.setAttribute('value',lenguaje.id_lenguaje)
         
        const label = document.createElement('label')
        label.setAttribute('for',lenguaje.lenguaje)
        label.textContent=lenguaje.nombre_lenguaje


        
        divLenguajes.append(check)
        divLenguajes.append(label)
       
        selectorLenguajes.append(divLenguajes)
    })

    


}


export const CrearTabla = async ()=>{
     
    const usuarios = await get("usuarios");
    const generos = await get("generos");
    const ciudades = await get("ciudades");
    const  lenguajes = await get("lenguajes");

    /*Query selectors */
     
    const body = document.querySelector("body");

    /*Creacion de elementos de encabezado */
    const tabla = document.createElement('table')
    const header = document.createElement('thead')
    const thId = document.createElement('th')
    const thDocumento = document.createElement('th')
    const thNombreUsuario = document.createElement('th')
    const thApellido = document.createElement('th')
    const thTelefono = document.createElement('th')
    const thContrasena = document.createElement('th')
    const thGenero = document.createElement('th')
    const thCiudad = document.createElement('th')
    const filaEncabezado = document.createElement('tr')
    
    /*Creacion de contenido de texto de encabezado */
    thId.textContent = "ID";
    thDocumento.textContent = "Documento";
    thNombreUsuario.textContent = "Nombre";
    thApellido.textContent = "Apellido";
    thTelefono.textContent = "Telefono";
    thContrasena.textContent = "Contraseña";
    thGenero.textContent = "Genero";
    thCiudad.textContent = "Ciudad";
    

    /*Añadir encabezado*/

    filaEncabezado.append(thId,thDocumento,thNombreUsuario,thApellido,thTelefono,thContrasena,thGenero,thCiudad)
    header.append(filaEncabezado)
    tabla.append(header)

    /*Creacion del cuerpo */
    const tBody = document.createElement('tbody')


    usuarios.data.forEach(usuario => {
        const filaCuerpo  = document.createElement("tr")
        filaCuerpo.classList.add('fila')
        
        const id = document.createElement("th")
        const  documento = document.createElement("th")
        const nombreUsuario = document.createElement("th")
        const Apellido = document.createElement("th")
        const telefono = document.createElement("th")
        const contrasena = document.createElement("th")
        const Genero = document.createElement("th")
        const Ciudad = document.createElement("th") 

        generos.data.forEach(genero =>{
             if(genero.id_genero == usuario.id_genero){

                Genero.textContent = genero.genero
             } 


        })

        ciudades.data.forEach(ciudades =>{
            if(ciudades.id_ciudad == usuario.id_ciudad){
                
                Ciudad.textContent = ciudades.ciudad;
            }
        })

        
        
        

        id.textContent = usuario.id_usuario;
        documento.textContent = usuario.documento;
        nombreUsuario.textContent = usuario.nombre_usuario;
        Apellido.textContent = usuario.apellido_usuario;
        telefono.textContent = usuario.telefono;
        contrasena.textContent = usuario.contrasenia;


        
        
        tBody.append(filaCuerpo)


     const Opciones = document.createElement('th')

     const divBotones = document.createElement('div')

     const botonEditar = document.createElement("button")
     botonEditar.classList.add("botonesTabla__boton","editar");
     botonEditar.setAttribute("id",usuario.id_usuario)
     botonEditar.setAttribute("name","btn_editar")
     botonEditar.textContent = "Editar"
     
     divBotones.append(botonEditar)
     
     const botonEliminar = document.createElement("button")
     botonEliminar.classList.add("botonesTabla__botonEliminar","eliminar")
     botonEliminar.setAttribute("id",usuario.id_usuario)
     botonEliminar.setAttribute("name","btn_eliminar")
     botonEliminar.textContent = "Eliminar"
     divBotones.append(botonEliminar)
     

    

     Opciones.append(divBotones)
     filaCuerpo.append(id,documento,nombreUsuario,Apellido,telefono,contrasena,Genero,Ciudad,Opciones)
   
      botonEditar.addEventListener('click',() =>{
       
      const id = botonEditar.getAttribute("id")  

      window.location.href = `../Modules/ActualizarUsuario.html?id=${encodeURIComponent(id)}`
      
   })

    });
    

    /*Añadir cuerpo */
    tabla.append(tBody) 
    
    /*Añadir clases a los elementos */
     tabla.classList.add('tabla')
     header.classList.add('encabezadoTabla')
     
     
     
  
     body.append(tabla)

   
    
}

export const TraerDatosSeleccionados = async (id)=>{
      
    const usuarioDatos = await get("usuarios");
    


}