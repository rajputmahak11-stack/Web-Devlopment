// function start()
// {
//     console.log("Game started");

//     document.getElementById("roledise1").disabled=false;
//      document.getElementById("restart").disabled=false;
//       document.getElementById("start").disabled=true;
// }
// function restart()
// {
//     window.location.reload();
// }
// function p1Play()
// {
//     console.log("player1Playing");
//     let score = Number(document.getElementById("p1sc").innerText);

//     const DF =Math.floor(Math.random() * 6 )+1;

//     switch(DF){
//         case 1:
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//          case 2:
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//          case 3:
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//          case 4:
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//          case 5:
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//          case :
//             {document.getElementById("p1dice").src ="img link";
//         break;}
//     }

//    if(DF == 6)
//    {
//     document.getElementById("roledise1").disabled=true;
//     document.getElementById("roledise2").disabled=false;
//    }
//    else{
//      score= score+DF;
//     document.getElementById("p1sc").innerText=score;
//    } 
// }
// function p2Play()
// {
//     console.log("player2Playing");

//      let score = Number(document.getElementById("p2sc").innerText);
//       const DF =Math.floor(Math.random() * 6 )+1;

//     //   shortcut switcj
//     // document.getElementById().src string literal ?

//      if(DF == 6)
//    {
//     document.getElementById("roledise1").disabled=false;
//     document.getElementById("roledise2").disabled=true;
//    }
//    else{
//      score= score+DF;
//     document.getElementById("p2sc").innerText=score;
//    }
   
// }
function start() {
  console.log("Game started");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1play() {
  console.log("Player 1 Playing");

  let score = Number(document.getElementById("score1").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  // SWITCH CASE FOR PLAYER 1 DICE
 
   switch (DF) {
    case 1:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142200.png";
      break;
    case 2:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142208.png";
      break;
    case 3:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142214.png";
      break;
       case 4:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142221.png";
      break;
   
    case 5:
      document.getElementById("dice2").src ="Screenshot 2025-11-30 142227.png";
      break;
       case 6:
      document.getElementById("dice2").src = "Screenshot 2025-11-26 182030.png";
      break;
  }
  console.log("Player 1 rolled:", DF);

  if (DF === 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    score += DF;
    document.getElementById("score1").innerText = score;

    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  }
}

function p2play() {
  console.log("Player 2 Playing");

  let score = Number(document.getElementById("score2").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  // SWITCH CASE FOR PLAYER 2 DICE
  switch (DF) {
    case 1:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142200.png";
      break;
    case 2:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142208.png";
      break;
    case 3:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142214.png";
      break;
       case 4:
      document.getElementById("dice2").src = "Screenshot 2025-11-30 142221.png";
      break;
   
    case 5:
      document.getElementById("dice2").src ="Screenshot 2025-11-30 142227.png";
      break;
       case 6:
      document.getElementById("dice2").src = "Screenshot 2025-11-26 182030.png";
      break;
  }

  console.log("Player 2 rolled:", DF);

  if (DF === 6) {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  } else {
    score += DF;
    document.getElementById("score2").innerText = score;

    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  }
}
