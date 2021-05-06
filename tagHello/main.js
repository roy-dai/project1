// -------------------alert示範-----------------------------
/*function countLetters() {
    document.onclick = function (e) {
        alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
        console.log(e);
    };
};
window.onload = countLetters();*/

// --------------------------Confirm Box示範-------------------------------------
/*let confirmAnswer = confirm("你真的要取消這個服務嗎");
console.log(confirmAnswer);
let thisH1 = document.getElementsByTagName("h1")[0];
if(confirmAnswer){
    thisH1.innerHTML = "服務已取消"
}else{
    thisH1.innerHTML = "繼續使用本服務"
}*/
//--------------------------Prompt Box測試--------------------------
/*let PromptAnswer = prompt("小明家有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫甚麼?", "張三");
let thisH1 = document.getElementById("Response");

switch (PromptAnswer) {
    case "張三":
        thisH1.innerHTML = "那小名是誰?";
        break;
    case "小名":
        thisH1.innerHTML = "聰明";
        break;
    default:
        thisH1.innerHTML = "喔喔喔"
}*/
// ---------------------------函數測試---------------------------
function showAlert() {
    thisH1.innerHTML = "Hello!";
}
let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
thisButton.addEventListener("click", showAlert);


/* thisButton.onclick = function () {
     showAlert();
 }
 thisButton.onclick =showAlert;*/
/*thisButton.onclick = function(){
    for(let i=0;i<10;i++){
        if(i==3){
            // break;
            continue;
        }
        console.log(i);
    }
}*/

// thisButton.onclick = showAlert;
// thisButton.onclick = function () {
//     let person = {
//         firstName: "Ryan",
//         lastName: "Chung",
//         heught: 178
//     };
//     for (x in person/*window*/) {
//         console.log(x + ":" + person/*window*/[x])
//     }
// }