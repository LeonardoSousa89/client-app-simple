const doc=document

let variable={
    id:doc.getElementById('id'),
    msg:doc.getElementById('msg')
}

doc.onload=addEventListener('load',(e)=>{
    e.preventDefault()
    loadData()
})


function loadData(){
    const URL='https://server-app-simple.herokuapp.com'    
    const config={method:'GET'}
    fetch(URL,config).then(response=>response.json())
            .then(response=>{
                for(let i=0;i<response.length;i++){
                        console.log(variable.id.textContent=response[i].id)
                        console.log(variable.msg.textContent=response[i].msg)
                }
            })
            .catch(e=>console.log(e))
}

