const doc=document

let variable={
    id:doc.getElementById('id'),
    msg:doc.getElementById('msg'),
}

doc.onload=addEventListener('load',(e)=>{
    loadData()
})

function loadData(){
    const URL='https://server-app-simple.herokuapp.com'    
    const config={method:'GET'}
    fetch(URL,config).then(response=>response.json())
            .then(response=>{
                for(let i=0;i<response.length;i++){
                    let id=response[i].id
                    createServerElement('ul',id,variable.id)

                    let msg=response[i].msg
                    createServerElement('ul',msg,variable.msg)
                }
            })
            .catch(e=>console.log(e))
}

function createServerElement(typeElement,serverElement,containerPrintElementOnDom){
    let elementCreated=doc.createElement(`${typeElement}`)
    elementCreated.append(serverElement)
    containerPrintElementOnDom.append(elementCreated)
}

doc.getElementById('opt').addEventListener('click',()=>{
    doc.location.href='http://192.168.56.1:8080/options'
})


