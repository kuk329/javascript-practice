const input = document.querySelector('.input');
const addBtn = document.querySelector('.button__plus');
const deleteBtn = document.querySelector('.item__delete');
const items = document.querySelector('.item__list');


addBtn.addEventListener('click',()=>{

    // 1. 입력한 text를 받아옴.
    const text =input.value;
    if(text===''){
        input.focus();
        return;
    }

    //2. 해당 text에 대한 item을 만듬
    const item = createItem(text);
    
    //3. 만든 item을 목록에 추가
    items.appendChild(item);

    //4. input 내용 초기화
    input.value ='';
    input.focus();

})

function createItem(text){

    const li = document.createElement('li');
    const div = document.createElement('div');
    div.setAttribute('class','item');


    const span = document.createElement('span');
    span.setAttribute('class','item__name');
    span.innerText = text;
    
    const button = document.createElement('button');
    button.setAttribute('class','item__delete');
    button.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    button.addEventListener('click',()=>{
        items.removeChild(li);
    })

    const line = document.createElement('div');
    line.setAttribute('class','line');

    div.appendChild(span);
    div.appendChild(button);
    li.appendChild(div);
    li.appendChild(line);

    return li;    


}