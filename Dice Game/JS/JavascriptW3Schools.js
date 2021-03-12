
var click = document.getElementById('click');
var click2 = document.getElementById('click2');
var txt = document.getElementById('demo');
var img = document.getElementById('img');
var numGuess = document.getElementById('numGuess');
var typeNumber = document.getElementById('typeNumber');
var answer = document.getElementById('answer');
var winnerConfetti = document.getElementById('winnerConfetti');
var clickSound = document.getElementById('clickSound');
var applause = document.getElementById('applause');


answer.style.display = 'none';
txt.style.display= 'none';
winnerConfetti.style.display = 'none';

var randImg = img.src('dice_images/dice_2.png');


function changeNum() {
    clickSound.play();

    var random = Math.floor(Math.random()*6) + 1;

    img.src = "dice_images/dice_"+random+".png";

    // img.style.transition = "0.2s ease";

    // img.style.transform = "rotate(360deg)";

    txt.innerHTML = random;

    setTimeout(()=>{
      

   
        if (typeNumber.value == "") {
            alert('Put a number between 1 and 6');

        }else if(isNaN(typeNumber.value)) {
            alert('Put a number only');
            typeNumber.value = null;
            typeNumber.focus();


        }else if(typeNumber.value < 1 || typeNumber.value > 6) {
            alert('Number out of range!');
            typeNumber.value = null;
            typeNumber.focus();


        }
        else if (typeNumber.value == random) {
            setTimeout(()=>{
                answer.style.display = 'flex';
                answer.innerHTML = 'WIN!';
                answer.style.backgroundColor = '#22db1b';
                    setTimeout(()=>{
                        winnerConfetti.style.display= 'flex';
                    }, 900)
                        applause.play();

                // alert('YESSS YOU WIN!');
                typeNumber.value = null;
                typeNumber.focus();

            }, 10);
            setTimeout(()=>{
                answer.style.display = 'none';
                winnerConfetti.style.display= 'none';
            },2000)
        }else{
            setTimeout(()=>{
                answer.style.display = 'flex';
                answer.innerHTML = 'LOST!';
                answer.style.width = '260px';
                answer.style.backgroundColor = 'red';
                // alert("You lost :(");
                typeNumber.value = null;
                typeNumber.focus();
            }, 10);
            setTimeout(()=>{
                answer.style.display = 'none';

            },1000)
        }

    }, 20);



    
}




