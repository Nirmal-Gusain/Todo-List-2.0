let inputContent = document.querySelector(".inputContent")
let input = document.querySelector("input")
let addButton = document.querySelector("button")

let editTodo = null

function printNote() {
    if (addButton.innerText == "Edit Text") {
        editTodo.target.parentElement.previousElementSibling.innerText = input.value
        input.value = ""
        input.focus()
        addButton.innerText = "Add Note"
    } else {
        if (input.value === "") {
            alert("PLEASE WRITE A NOTE FIRST")
        } else {
            divContent = document.createElement("div")
            divContent.classList.add("content")
            let para = document.createElement("p")
            let icons = document.createElement("div")
            icons.className = "icons"
            let icon1 = document.createElement("i")


            icon1.addEventListener("click", function (e) {
                input.value = para.innerText
                para.innerText = ""
                input.focus()
                addButton.innerText = "Edit Text"
                editTodo = e
            })
            
            let icon2 = document.createElement("i")
            icon2.addEventListener("click",function(){
                icons.parentNode.remove()
            })
            icon1.className = "fa-regular fa-pen-to-square"
            icon2.className = "fa-regular fa-trash-can"


            para.innerText = input.value
            input.value = ""

            icons.append(icon1, icon2)
            divContent.append(para, icons)
            inputContent.append(divContent)
            console.log(inputContent)


        }
    }



}



