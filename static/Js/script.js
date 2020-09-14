//challenge 1
function ageInDays(){
    let byear = prompt("Enter your birth year : ")
    let ageInDayss = (2020 - byear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    //let c = document.querySelector('#flex-box-result');
    document.getElementById('ans').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge 2
function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "static/Images/rock.jpg";
    image.style = "width: 150px";
    div.appendChild(image);

}

//challenge 3
function rpsGame(yourChoice){
    yourChoice = yourChoice.id;
    let botChoice = numbertoChoice(Math.floor(Math.random() * 3));
    let result = decideWinner(yourChoice, botChoice);
    let message = finalMessage(result);
    console.log(yourChoice, botChoice);
    rpsFrontend(yourChoice, botChoice, message);
}

function numbertoChoice(num){
    return ['rock', 'paper', 'scissor'][num];
}

function decideWinner(yourChoice, botChoice){
    let rpsDatabase = {
        'rock': {'rock': 0, 'paper': -1, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0, 'scissor': -1},
        'scissor': {'rock': -1, 'paper': 1, 'scissor': 0}
    }
    return rpsDatabase[yourChoice][botChoice];
}

function finalMessage(result){
    if(result == -1) return {'message': 'You lost!', 'color': 'red'};
    if(result == 0) return  {'message': 'You tied!', 'color': 'yellow'};
    return {'message': 'You won!', 'color': 'green'};
}

function rpsFrontend(humanImageChoice, botImagechoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=" + imageDatabase[humanImageChoice] + " style=\"width: 150px; height: 150px; box-shadow: 0px 10px 50px rgba(37,50,233, 1);\">";
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font: 60px; padding: 30px;'>"  + finalMessage['message'] + "</h1>";
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);

    botDiv.innerHTML = "<img src=" + imageDatabase[botImagechoice] + " style=\"width: 150px; height: 150px; box-shadow: 0px 10px 50px rgba(243,38,24, 1);\">";
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
    console.log(finalMessage['message']);
}

//Challenge 4
let all_buttons = document.getElementsByTagName('button');
let copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value == 'random'){
        buttonRandom();
    }
    if(buttonThingy.value == 'red'){
        buttonRed();
    }
    if(buttonThingy.value == 'green'){
        buttonGreen();
    }
    if(buttonThingy.value == 'reset'){
        buttonReset();
    }
}

function buttonRandom() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        let buttonColor = RandomButtonGenrator();
        all_buttons[i].classList.add(buttonColor);
    }
}

function RandomButtonGenrator(){
    let buttonDatabase = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    let num = Math.floor(Math.random() * 4);
    return buttonDatabase[num];
}

function buttonRed(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
