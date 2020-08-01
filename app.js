

init();
var score = [0 , 0];
var activePlayer = 0;
var roundScore = 0;
var gamePlaying ; // state variable //
var store;
 var input;

document.querySelector('.btn-roll').addEventListener('click' , function(){
    
if(gamePlaying)
 
    {
    var dice = Math.floor(Math.random() * 6  ) + 1;  
      
        
   
var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
     if(store === 6 && dice ===6) 
         {
             score[activePlayer] = '0';
             document.querySelector('#score-' + activePlayer).textContent = '0';
            
              reuse();
             
             
         }
   
    
 else if(dice > 1)
        {
              roundScore+=dice;  
            document.getElementById('current-' + activePlayer).textContent= roundScore;
        
        }
        
       else
           {    
             
          
              
                       reuse();
                      
           } 
        
        
    }
        
      
store = dice;  


      
});






document.querySelector('.btn-hold').addEventListener('click' , function(){
 
  if(gamePlaying)
      {
         
          score[activePlayer] += roundScore;
document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]; 
          
 input = document.querySelector('.final-score').value;
         
if(input)
    {
        
         winningScore = input;
    }else
        winningScore = 30;
          

    if(score[activePlayer] >= winningScore)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
          
         
                    gamePlaying = false;
              
          
            
        }
          else
              {
                  reuse();
              }
          
          
      }

  
    
  });  
    




 
                                                
                                                     
                                                     
document.querySelector('.btn-new').addEventListener('click' , init);
    
  
    
    
    
    
    


       
    
         
                                                     
                                                     
   





function reuse()
{

activePlayer ===0 ? activePlayer =1 : activePlayer = 0;
document.querySelector('.dice').  style.display = 'none';
 roundScore = 0;
document.getElementById('current-0').textContent= '0';
 document.getElementById('current-1').textContent= '0'; 
 document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active'); 

}
   

function init()
{
       
score = [0 , 0];
activePlayer = 0;
roundScore = 0;

document.querySelector('.dice').  style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';    
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');    
document.querySelector('.player-0-panel').classList.add('active');
//input.textContent = 'none';
gamePlaying = true;    

}



    
    

       

  
    
    
    
    
    

    
