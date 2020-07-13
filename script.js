function rpsGame(yourChoice){
    // console.log(yourChoice);
    var humanChoice = yourChoice.id;
    console.log(humanChoice)
    choices = ["rock", "paper", "scissor"]
    var computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)
    var message = {
        "won" : "You Won !!",
        "lost": "You lost !!",
        "ties": "You tied !!"
    }
    var imageDatabase = {
        "rock" : document.getElementById('rock').src,
        "paper" : document.getElementById('paper').src,
        "scissor" : document.getElementById('scissor').src,
    }
    document.getElementById("rock").remove()
    document.getElementById("paper").remove()
    document.getElementById("scissor").remove()


    if((humanChoice == "rock") && (computerChoice == "paper")){
       var msg = message.lost
    }else if ((humanChoice == "rock") && (computerChoice == "scissor")){
        var msg = message.won
    }else if ((humanChoice == "rock") && (computerChoice == "rock")){
        var msg = message.ties
    }else if((humanChoice == "paper") && (computerChoice == "paper")){
        var msg = message.ties
    }else if ((humanChoice == "paper") && (computerChoice == "scissor")){
        var msg = message.lost
    }else if ((humanChoice == "paper") && (computerChoice == "rock")){
        var msg = message.won
    }else if((humanChoice == "scissor") && (computerChoice == "paper")){
        var msg = message.won
    }else if ((humanChoice == "scissor") && (computerChoice == "scissor")){
        var msg = message.ties
    }else if ((humanChoice == "scissor") && (computerChoice == "rock")){
        var msg = message.lost
    }
    var humanDiv = document.createElement("div")
    var messageDiv = document.createElement('div')
    var computerDiv = document.createElement("div")

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] + "' height=150px width=150px style='box-shadow:0px 0px 20px 5px red'/>";
    document.getElementById('flexElement1').appendChild(humanDiv);
   
    messageDiv.innerHTML = "<h1 style='color:red; font-size:40px;margin:auto;'>" + msg + "</h1>";
    document.querySelector(".container").appendChild(messageDiv);

    computerDiv.innerHTML = "<img src='" + imageDatabase[computerChoice] + "' height=150px width=150px style='box-shadow:0px 0px 20px 5px black'/>";
    document.getElementById('flexElement3').appendChild(computerDiv);


}