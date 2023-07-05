const input = document.getElementById("chatinputbox");
const log = document.getElementById("chat-output");

function updateValue() {
    if(input.value == ""){
        log.textContent = "Start Typing!";
    }else{
        log.innerHTML = input.value.replace(/\n/g, "<br>");
    }
    //test
}
