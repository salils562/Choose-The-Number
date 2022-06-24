let startButton = document.getElementById('startGame');
let computer = document.getElementById('computer');
let textarea = document.getElementById('textarea');
let alert=document.getElementById('alert');
startButton.addEventListener('click', () => {
    let comp = Math.floor((Math.random() * 100) + 1);
    textarea.innerHTML = `<input type="text" id="userInput" placeholder="Choose your number"></input></br><button class="btn btn-primary" id="choose">Choose</button>`;
    startButton.classList.remove('btn-primary');
    startButton.classList.add('btn-success');
    let comHtml = `<p>Computer choosen its's number</br>Please predict the number choosen by computer</br>to win the game`;
    computer.innerHTML = comHtml;
    startButton.style.display='none';
    choose(comp);
});

choose = (comp) => {
    let choose = document.getElementById('choose');
    let userInput = document.getElementById('userInput');
    choose.addEventListener('click', () => {
        let userNumber = parseInt(userInput.value);
        if (userNumber === comp) {
            let gui=document.getElementById('handle');
            gui.innerHTML=`<div class="alert alert-success" role="alert">
            <h4 class="alert-heading mb-5">Well done!</h4>
            <p>AWW yeah!! You won the game. Thanks for playing , please share wiht your friends and others to let them enjoy the game too.</p>
            <hr>
            <p class="mb-0">Whenever you need stress relief !<br/>You are Always welcome</p>
            <button class="btn btn-primary mt-3 mb-2" id="playagain">Play!! again</button>
          </div>`;
          alert.style.display='none';
          let playagain=document.getElementById('playagain');
          playagain.addEventListener('click',()=>{
          location.reload();
          });
        }
        else if (userNumber > 100) {
            alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Noo !</strong> Please choose number less than or equal to 100
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            `;
            userInput.value="";
        }
        else if (userNumber < comp) {
            alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Uhh !</strong> Computer Choosed greater than ${userInput.value}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            `;
            userInput.value="";
        }
        else if (userNumber > comp) {
            alert.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Uhh !</strong> Computer Choosed less than ${userInput.value}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            `;
            userInput.value="";
        }

    });

}