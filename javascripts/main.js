
$("#btn").on("click", function(){
  let player1Val = $("#player1").val();
  let player2Val = $("#player2").val();
  let winnerEl = $("#winner");
  let outputEl = $("#output");

  const players = [];
  const playerTotalPoints = [];

  const writeToDom = (players) => {
    let playerDomString = "";
    // outputEl = "";
    for (i = 0; i < players.length; i++) {
      playerDomString += `<div class="player row col-md-5">`;
      playerDomString += `<img class="image img-circle" src="${players[i].gravatar_url}"`;
      playerDomString += `<p class="points">total points: ${players[i].points.total}</p>`;
      playerDomString += `</div>`;
    }
    outputEl.append(playerDomString).show("slow");
  };

  const checkForWinner = () => {
    let winner = "";
    let playerPointString = "";

    for (var j = 0; j < players.length; j++) {
      playerPointString = players[j].points.total;
      playerTotalPoints.push(playerPointString);
    }
    if (playerTotalPoints[0] > playerTotalPoints[1]) {
      winnerEl.val("the winner " + (players[0].name));
      winner = players[0].name;
    } else {
      winnerEl.val("the winner " + (players[1].name));
      winner = players[1].name;
    }
    winnerEl.append("the winner is: " + winner);
  };


  const loadPlayer1 = () => {
      return new Promise((resolve, reject) => {
        $.ajax("https://teamtreehouse.com/" + player1Val + ".json")
        .done((data1) => resolve(data1))
        .fail((error1) => reject(error1));
        });
  };
  const loadPlayer2 = () => {
      return new Promise((resolve, reject) => {
        $.ajax("https://teamtreehouse.com/" + player2Val + ".json")
        .done((data2) => resolve(data2))
        .fail((error2) => reject(error2));
        });
  };

  Promise.all([loadPlayer1(), loadPlayer2()])
          .then((result) => {
            // console.log("result", result);
            result.forEach((xhrResult) => {
              players.push(xhrResult);
            });
            writeToDom(players);
            checkForWinner(players);
            // console.log(players)
          }).catch((error) => {
           alert("please enter a treehouse profile");
          });


});//closing click event









