const toDoForm = document.getElementById("todo-form");
//html에서 불러옴
const toDoInput = toDoForm.querySelector("input");
//input한 텍스트
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos=[]; //변경되야하기 때문에 let
//입력값 todos배열을 localStorage에 넣어 쿠키값 저장
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //toDos라는 배열을 문자열화하여 todos라는 key값에 할당함(저장)
}


//버튼 클릭함수
function deleteToDo(event){
    const li = event.target.parentElement;
    //삭제할 li(button의 부모)(같이 죽는다)
    //클릭한 대상의 부모 li가 li라는 변수에 저장

    li.remove();    
    //id에 따라 제거하는 함수

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    //toDo.id와 li.id의 값이 다르면 false를 반환
    //false를 반환한 값을 제외한 true를 반환한 값만 넣어 array구성
    saveTodos();
}
//todolist를 그리는 함수
function paintToDo(newTodo){ 
    const li = document.createElement("li"); //html에 요소 추가
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    //obj값으로 받았을 때 그 안의 요소를 끌어내야 정상적으로 나옴
    const button = document.createElement("button");
    button.innerText = "❌" //window+.->이모지 만듬
    li.appendChild(span); //li에 span을 자식으로 추가
    li.appendChild(button); 
    toDoList.appendChild(li);//todolist에 li를 자식으로추가
    button.addEventListener("click",deleteToDo);
}

//todo리스트가 제출될 때 event
function handleToDoSubmit(event){ 
    event.preventDefault(); //새로고침 막음
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value=""; //submit할 때마다 빈칸으로 만듬
    const newTodoobj = {
        text:newTodo,
        id: Date.now(),
    }; //입력값을 오브젝트 형태로 id(현재시간값)으로 
    //겹칠 수 없게하여 독립적인 id를 만들어냄
    toDos.push(newTodoobj);//입력값을 배열에 저장
    paintToDo(newTodoobj); //obj의 형태로 그리게 바꿈
    saveTodos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);//저장

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);//배열로 바꿔서 저장
    toDos = parsedToDos;
    //toDos가 빈 array로 시작하기 때문에 새값을 저장하면 기존값이 없어짐
    //기존array를 toDos에 저장해주어 기존값이 없어지는 것을 방지
    parsedToDos.forEach(paintToDo);
    //array.foreach는 받아온 array를 for 반복문 없이 
    //item 하나씩 function에 넣을 수 있는 특이함수
    //위는 paintToDo함수에 배열을 하나씩 넣어줌
}

