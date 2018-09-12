
$(document).ready(()=>{

  function initGame(){
    f_score_box_0 = $("#score-0").text(0)
    f_score_box_1 = $("#score-1").text(0)
    dice1 = $("#dice-1")
    dice2 = $("#dice-2")
    dice1.hide()
    dice2.hide();
    player = 0
    scoreInput= 0 ;
    current_box1 = $("#current-0").text(0)

    c_box2 = $("#current-1").text(0)
    current = $("#current").text(0)
    SCORES = [0,0]

    score = 0
    document.querySelector('.panel_0').classList.remove('winner')
    document.querySelector('.panel_1').classList.remove('winner')
    document.querySelector('.panel_0').classList.remove('active')
    document.querySelector('.panel_1').classList.remove('active')
    document.querySelector('.panel_'+player).classList.add('active')
   
    document.getElementById('name-0').innerText = 'PLAYER 1'
    document.getElementById('name-1').innerText = 'PLAYER 2'
    $(".btn-hold").unbind('click')
    $(".btn-roll").unbind('click')
    $(".btn-roll").click(()=>roll())
    $(".btn-hold").click(()=>hold())
  }
 
  initGame()
  $(".btn-new").click(()=>{
    initGame()
  })

  function roll(){
    rand1 =Math.floor(Math.random()*6+1);
    rand2 =Math.floor(Math.random()*6+1);

    score += rand1+rand2;
    current.text(score) 
    
    dice1[0].src = 'dice-'+rand1+'.png'
    dice2[0].src = 'dice-'+rand2+'.png'
    
    dice1.show()
    dice2.show()
  }

  function hold(){
    scoreInput = $("select").val()
    SCORES[player] += score
   if(player == 0){
     f_score_box_0.text(SCORES[player]);
   }else{
     f_score_box_1.text(SCORES[player])
   }
   current.text(0)
   checkWinner(SCORES[player])
   score = 0
   dice1.hide()
   dice2.hide()
  }

  function checkWinner (_score){
    if(scoreInput >0 &&_score >= scoreInput||_score >=100){
      win()
    }
    else{
     $(".panel_"+player)[0].classList.remove("active");
     player == 1?player=0:player=1
     $(".panel_"+player)[0].classList.add("active");
    }
  }
   
  function win(){
    $(".btn-hold").unbind('click')
    $(".btn-roll").unbind('click')
    document.querySelector('.panel_0').classList.remove('active')
    document.querySelector('.panel_1').classList.remove('active')
    document.querySelector('.panel_'+player).classList.add('winner')
    document.getElementById('name-'+player).innerText = 'winner !'
  }

})
