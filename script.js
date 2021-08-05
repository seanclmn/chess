let draggables = document.querySelectorAll("img")

let containers = document.querySelectorAll(".square")



//Dragging
draggables.forEach(item => {
    item.addEventListener("dragstart",()=>{
        parent_id = item.parentElement.id
        item.classList.add("dragging_now")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging_now")
    })
})

containers.forEach(container =>{
    container.addEventListener("dragover",(event)=>{
        event.preventDefault()
        let draggable = document.querySelector(".dragging_now")
        let items = container.querySelectorAll("img")
        console.log(items)
        if(items.length==0){
            container.appendChild(draggable)
        }
        else if (takeable(items[0],draggable)){
            container.appendChild(draggable)
            
        }
        
    })

})


//Click and select

draggables.forEach(item => {
    
})














//Takeable function

function takeable(victim,attacker){
    if(victim.src[8]!==attacker.src[8]){
        victim.remove()
        return true
    }
}