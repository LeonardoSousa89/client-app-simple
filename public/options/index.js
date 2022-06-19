const doc=document

let id=doc.getElementById('id')
let msg=doc.getElementById('msg')

doc.getElementById('obter').addEventListener('click',(e)=>{
    let ID=id.value
    getDataById(ID)
})

function getDataById(id){
    const URL=`https://server-app-simple.herokuapp.com/${id}`    
    const config={method:'GET'}
    fetch(URL,config).then(response=>response.json())
            .then(response=>{
                for(let i=0;i<response.length;i++){
                    id.value=response[i].id  
                    msg.value=response[i].msg
                }
            })
            .catch(e=>console.log(e))
}

doc.getElementById('atualizar').addEventListener('click',(e)=>{
    let ID=id.value
    update(ID,msg)
})

function update(id, msg){
    const URL=`https://server-app-simple.herokuapp.com/upt-msg/${id}`
    data={msg:msg.value}    
    const config={
            method:'PUT',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        }
    fetch(URL,config).then(response=>response.json()).catch(e=>console.log(e))
}


