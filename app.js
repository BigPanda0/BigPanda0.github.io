let tg = window.Telegram.WebApp;
tg.expand()

tg.MainButton.textColor = "FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 =  documet.getElementById("btn1");
let btn2 =  documet.getElementById("btn2");
let btn3 =  documet.getElementById("btn3");
let btn4 =  documet.getElementById("btn4");
let btn5 =  documet.getElementById("btn5");
let btn6 =  documet.getElementById("btn6");

btn1.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
    }
});
btn5.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 5!");
        item = "5";
        tg.MainButton.show();
    }
});
btn6.addEventListener("click",function()
{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 6!");
        item = "6";
        tg.MainButton.show();
    }
});
Telegram.WebApp.onEvent("mainButtonClicked", function()
{
    tg.sendData(item);
})
let usercard = documetgetElementByld("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;
usercard.appendChild(p);