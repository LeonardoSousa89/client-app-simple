const doc=document

let variable={
    id:doc.getElementById('id'),
    msg:doc.getElementById('msg')
}

doc.onload=addEventListener('load',(e)=>{
    e.preventDefault()
    loadData()
})


function loadData(id){
    const URL=`https://server-app-simple.herokuapp.com/${id}`    
    const config={method:'GET'}
    console.log(id)
    fetch(URL,config).then(response=>response.json())
            .then(response=>{
                for(let i=0;i<response.length;i++){
                  /**código aqui */
                }
            })
            .catch(e=>console.log(e))
}




