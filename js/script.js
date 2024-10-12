// ========================  dom part start  ===========================
let head_input    = document.querySelector('.head_input')
let error         = document.querySelector('.error')
let todo_head     = document.querySelector('.todo_head')
let todo_list     = document.querySelector('.todo_list')
// ------------------------  dom part end  -----------------------------
// ========================  function part start  ======================
let add = ()=>{
    if(head_input.value == ""){
        alert('an error of judgement !')
        error.innerHTML = 'an error of judgement !'
        todo_head.style       = 'border: 1px solid red'
    }else{
        error.innerHTML = ''
        todo_head.style       = 'border: 2px solid black'
                // ===  element part  ===
        let todo_div    = document.createElement('div')
        let todo_input  = document.createElement('input')
        let todo_edit   = document.createElement('button')
        let todo_delete = document.createElement('button')
        let todo_time   = document.createElement('h1')
                // ===  parent part  ===
        todo_list.appendChild(todo_div)
        todo_div.appendChild(todo_input)
        todo_div.appendChild(todo_edit)
        todo_div.appendChild(todo_delete)
                // ===  class name  ===
        todo_div.classList.add('single_todo')
        todo_delete.classList.add('delete')
                // ===  delete & edit  ===
        todo_delete.innerHTML = 'Delete'
        todo_edit.innerHTML   = 'Edit'
        todo_input.value = head_input.value
        head_input.value  = ''
        todo_input.setAttribute('readonly' , 'readonly')
                // === function delete  ===
        todo_delete.addEventListener('click' , ()=>{
            todo_div.remove()
        })
    }
}
let addKey = (item)=>{
    if(item.key == "Enter"){
        add()
    }
}
// ------------------------  function part end  ------------------------