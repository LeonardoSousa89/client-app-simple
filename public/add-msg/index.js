const doc=document

const message=doc.getElementById('msg')
const enviar=doc.getElementById('enviar')

enviar.addEventListener('click',()=>{
    let msg=message.value
    ajax(msg)
    clear()
})

function clear(){
    message.value=''
}

async function ajax(msg){
    const URL='https://server-app-simple.herokuapp.com/add-msg'
    const config={method:'POST', 
                  body :JSON.stringify(msg),
                  headers :{
                  'Content-Type': 'application/json'
                }}
    fetch(URL,config)
                .then(response=>{
                    if(response.ok){
                       console.log('requisicao bem sucedida!')
                    }else{
                        console.log('houve um erro ao processar sua requisição!')
                        console.log(response.statusText)
                    }
                })
                .catch(error=>console.log(error))
}


