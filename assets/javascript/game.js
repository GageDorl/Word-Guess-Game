var solveWords = ["creeper", "zombie", "skeleton", "enderman", "spider", "villager", "steve", "phantom", "diamond", "wither"];
        var solvePics = ["https://i.pinimg.com/originals/7a/a3/0c/7aa30c0658b18c60becc10a3563360b9.png","http://minecraftfaces.com/wp-content/bigfaces/big-zombie-face.png","https://i.pinimg.com/originals/a2/91/26/a29126563a70c51690581f73a62a9d00.png","https://i.pinimg.com/originals/7b/4f/5f/7b4f5fb2785f755a831f3697517abe41.png","http://minecraftfaces.com/wp-content/bigfaces/big-spider-face.png","https://i.pinimg.com/originals/51/b9/b3/51b9b3db5da0b94626e90b1655730fff.png","https://minecraftskinstealer.com/api/v1/skin/download/face/Steve","http://minecraftfaces.com/wp-content/bigfaces/big-phantom-face.png","https://vignette.wikia.nocookie.net/minecraft/images/4/49/DiamondOreNew.png/revision/latest?cb=20190907223256","http://minecraftfaces.com/wp-content/bigfaces/big-wither-face.png"]
        var wins=0;
        var currentWord;
        var game;
        var randomNumber;
        var surpriseWord="";
        var main = document.getElementById('main');
        var guessesLeft;
        var letterFound=false;
        var wrongLetters = "";
        var left=document.getElementById('left-side');
        var wrong = document.getElementById('wrongs');
        var guess = document.getElementById('guess');
        var picture = document.getElementById('picture');
        var solveSounds = [document.getElementById('creeper'),document.getElementById('zombie'), document.getElementById('skeleton'), document.getElementById('enderman'), document.getElementById('spider'), document.getElementById('villager'), document.getElementById('steve'), document.getElementById('phantom'), document.getElementById('diamond'), document.getElementById('wither') ]
        var sadface = "<img src=https://img.pngio.com/sad-icon-this-is-a-picture-of-a-face-that-is-frowning-it-looks-png-50-px-sad-face-png-1600_1600.png height=200px>";
        var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var aLetter=false;
        document.onkeyup = function(event){
            var keyPressed = event.key;
            if(game!="started"){
                
                 
            game="started";
            startGame();
            }
            else if(guessesLeft>1){
                for(var i =0; i<alpha.length; i++){ 
                    if(keyPressed.toLowerCase()==alpha[i]){ 
                        aLetter=true;
                       break;}
                        
                        
                   }
                for(var i = 0 ; i<currentWord.length; i++){
                    if(keyPressed.toLowerCase()==currentWord.substring(i,i+1)){
                        surpriseWord=surpriseWord.substring(0,i)+currentWord.substring(i,i+1)+surpriseWord.substring(i+1,surpriseWord.length);
                        main.textContent=surpriseWord;
                        letterFound=true;
                    }
                }
                if(!letterFound&&aLetter){
                    guessesLeft--;
                    guess.innerHTML="Guesses left: "+guessesLeft+"<br>Wins: "+wins;
                    wrongLetters+=keyPressed+" ";
                    wrong.textContent=wrongLetters;
                    aLetter=false;
                }
                else if(!aLetter){
                    alert(keyPressed+' is not a letter');
                    
                }
                if(surpriseWord==currentWord){
                   setTimeout(function(){main.textContent="You Win press any key to play again";
                   picture.innerHTML="<img src="+solvePics[randomNumber]+" height=200px>";
                   solveSounds[randomNumber].play();
                    game="ended";
                    wins++;
                   }, 800);
                }
                letterFound=false;
            }
            else{
                main.innerHTML="You Lost<br>Press any button to try again";
                picture.innerHTML = sadface;
                wrongLetters="";
                wrong.textContent=wrongLetters;
                game = "ended";
            }
        }
        function startGame(){
            randomNumber = Math.floor(Math.random()*solveWords.length);
            currentWord = solveWords[randomNumber];
            picture.innerHTML="";
            guessesLeft=10;
            guess.innerHTML="Guesses left: "+guessesLeft+"<br>Wins: "+wins;
            surpriseWord="";
            wrong.textContent="";
            wrongLetters="";
            for(var i=0; i <currentWord.length; i++){
                surpriseWord+= "_";
            }
            console.log(surpriseWord);
            main.textContent=surpriseWord;
        }
