const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //문자를 반복적으로 사용할 때는 변수로 만들어주기
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();//기본동작 실행을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);//submit됐을 때안보이게
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //저장 (개발자도구로 확인)
    paintGreetings(username);
    
}
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //다시 보이게
}



const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }