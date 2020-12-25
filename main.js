console.log("Vivek pandey");
const btn=document.getElementById("Btn");

btn.addEventListener('click',function(){
    const player1=Math.floor(Math.random()*6)+1;  //Generating random number from 1 to 6 
    const player1Dice=`dice${player1}.png`;        
    document.getElementById("img1").setAttribute('src',player1Dice);
    const player2=Math.floor(Math.random()*6)+1;
    const player2Dice=`dice${player2}.png`;
    document.getElementById("img2").setAttribute('src',player2Dice);
    const result=document.getElementById('Result');
    if(player1==player2){
            result.innerText="DRAW!"
    }else if(player1>player2){
            result.innerText="Player1 Won!"
    }else{
        result.innerText="Player2 Won!"
    }
});
