export const get=async(endpoint)=>{
    const data= await fetch(`http://localhost:3000/`+endpoint);
    return await data.json();
}

export const postLenguajes =async(endpoint,objeto)=>{
    console.log(objeto);
    
    return await fetch(`http://localhost:3000/${endpoint}` ,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(objeto)
    })
}
export const postUsuarios =async(endpoint,objeto)=>{
    try {
        
        return await fetch(`http://localhost:3000/${endpoint}` ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...objeto})
        })
        
    } catch (error) {
        console.log(error);
    } 
}

export const put=async(endpoint,info)=>{
    return await fetch(`http://localhost:3000/`+endpoint,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(info)
    })
}
