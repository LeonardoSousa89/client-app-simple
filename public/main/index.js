const doc=document

let variable={
    id:doc.getElementById('id'),
    msg:doc.getElementById('msg'),
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
                    let id=response[i].id
                    createElement('ul',id,variable.id)

                    let msg=response[i].msg
                    createElement('ul',msg,variable.msg)
                }
            })
            .catch(e=>console.log(e))
}

function createElement(typeElement,serverElement,containerPrintElementOnDom){
    let elementCreated=doc.createElement(`${typeElement}`)
    elementCreated.append(serverElement)
    containerPrintElementOnDom.append(elementCreated)
}
