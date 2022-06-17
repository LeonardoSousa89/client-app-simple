const doc=document

let msg=doc.getElementById('msg')
const enviar=doc.getElementById('enviar')

enviar.addEventListener('click',()=>{
    ajax(msg)
})

async function ajax(msg){
    const URL='https://server-app-simple.herokuapp.com/add-msg'
    let data={msg:msg.value}
    const config={method:'POST', 
                  body:JSON.stringify(data),
                  headers:{
                  'Content-Type':'application/json'
                }}
    await fetch(URL,config)
                .then(response=>{
                    if(response.ok){
                       response.json()
                       console.log('requisicao bem sucedida!')
                       doc.location.href='https://client-app-simple.herokuapp.com/'
                    }else{
                        console.log('houve um erro ao processar sua requisição!')
                        console.log(response.statusText)
                    }
                })
                .catch(error=>console.log(error))
}


