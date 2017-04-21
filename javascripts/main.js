
$("#btn").on("click", function(){
  let player1Val = $("#player1").val();
  let player2Val = $("#player2").val();

  const player1 = [];
  const player2 = [];

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
          .then((allData) => {
              console.log("allData", allData);
          }).catch((errors) =>{
            console.log(errors);
  });


});//closing click event









