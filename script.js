let draggables = document.querySelectorAll("img")

let containers = document.querySelectorAll(".square")

let white_pieces = document.querySelectorAll("#w")
let black_pieces = document.querySelectorAll("#b")


console.log(white_pieces[0].draggable==true)
//Dragging
draggables.forEach(item => {
    item.addEventListener("dragstart",()=>{
        parent_id = item.parentElement.id
        item.classList.add("dragging_now")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging_now")
        move()
    })
})

containers.forEach(container =>{
    container.addEventListener("dragover",(event)=>{
        event.preventDefault()
        let draggable = document.querySelector(".dragging_now")
        let items = container.querySelectorAll("img")
        console.log(draggable.src[29])

        if(items.length==0){
            container.appendChild(draggable)
        }
        else if (takeable(items[0],draggable)){
            container.appendChild(draggable)
        }
    })
})


//Click and select

// draggables.forEach(item => {
    
// })




//This will make sure only one color can play at a time


function move(){
    if(white_pieces[0].draggable == true){
        white_pieces.forEach(element => element.draggable=false)
        black_pieces.forEach(element => element.draggable=true)
    }else{
        white_pieces.forEach(element => element.draggable=true)
        black_pieces.forEach(element => element.draggable=false) 
    }
}


//Takeable function

function takeable(victim,attacker){
    if(victim.src[29]!==attacker.src[29]){
        victim.remove()
        return true
    }
}


piece_moves = [
    
]