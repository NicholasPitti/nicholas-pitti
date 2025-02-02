import React from 'react'
import Stack from  'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Text from 'react-bootstrap/'
export const VerbalMemoryTest = () => {
  return (
    <div>VerbalMemoryTest</div>
  )
}


//import TestApp from "./TestApp";
/*
const [isDisabled, setIsDisabled] = useState(false);
//document.getElementById("showBtn").disabled=true;
const handleDisableButton = () => {
  setIsDisabled(true); // Disable the button
};
*/
/*
let newArray:string[]=[];
    let seenArray:string[]=[]; //let seenIndex=[]; not used //seenArray[0]="bruh"; //matching for some reason
    let emptyArray:string[]=[];
    let generatedIndex=0;
    let lives=3;
    let probability=0;
    let randomSeenIndex=0;
    let displayedWord=""; //sometimes this is counted ###
    let i;
    document.getElementById("showBtn").disabled=true;
    document.getElementById("newBtn").disabled=true;
    document.getElementById("seenBtn").disabled=true;
  
    getText("words.txt");
    async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text(); //buffer preloaded words
    newArray=myText.split(","); //populate new array with entire text file
    }

    function startGame(){
        document.getElementById("showBtn").disabled=true;
        document.getElementById("newBtn").disabled=false;
        document.getElementById("seenBtn").disabled=false;
        document.getElementById("startBtn").disabled=true;
        document.getElementById("textArea").innerHTML="";

        seenArray=emptyArray; 

        lives=3;//restarting lives
        document.getElementById("lives").textContent=lives;//displaying lives after restart
        showNewWord();

        //i<100 because seenArray.length=4 instead of 8 for somereason #To Be Fixed
        for (i=0;i<100;i++){
                seenArray.pop();
        }

    }

    function pickedNew(){
        if(seenArray.includes(displayedWord)){
            lives--;
        }else{
            seenArray.push(displayedWord);
        }

        document.getElementById("lives").textContent=lives;
        showNewWord();
        endGameCheck();
    }

    function pickedSeen(){
        if(!seenArray.includes(displayedWord)){
            lives--;
            seenArray.push(displayedWord);
        }

        document.getElementById("lives").textContent=lives;
        showNewWord();        
        endGameCheck();
    }

    function displayResults(){
        //seenArray.forEach(sliceQuotation);  /gets rid of output with quotations from text file
        document.getElementById("textArea").innerHTML=seenArray;
        document.getElementById("startBtn").disabled=false;
    }        

    function sliceQuotation(item,index){ //cleans up quatation marks from results textbox
        seenArray[index]=seenArray[index].slice(1,-1);
    }
    
    function showNewWord(){ ///generated index is for geting random word
        probablility=Math.floor(Math.random()*4);//arbitrary probability can be fine tuned to show seen words more often
        console.log("seenarray length--"+seenArray.length)
            if(probablility<1 && seenArray.length>1){
                randomSeenIndex=Math.floor(Math.random()*seenArray.length);
                displayedWord=seenArray[randomSeenIndex];
            //} else if(probablility>=1){
            } else {
            generatedIndex=Math.floor(Math.random()*99);
            displayedWord=newArray[generatedIndex];
            }
        document.getElementById("wordout").textContent =displayedWord;
        console.log("----------"+displayedWord);
    }
    
    function endGameCheck(){
        if(lives==0){
            document.getElementById("showBtn").disabled=false;
            document.getElementById("newBtn").disabled=true;
            document.getElementById("seenBtn").disabled=true;
        }  
    }
*/
function pickedNew(){

}
function pickedSeen(){
  
}
function startGame(){
  
}
function displayResults(){
  
}
const LocalProjects = () => {
  return (
    <>

      <Stack className="d-flex align-items-center" gap={3}>

        <div className="text-center fw-bold fs-1">
            Verbal Memory Test
        </div>
   
        <Stack className="w-25 mx-auto" gap={3}>
          <Button variant="success"  id="startBtn" onClick={startGame}>Start</Button>
          <Button variant="outline-warning" id="showBtn" onClick={displayResults}>Show Seen Words</Button>
          <Button variant="outline-primary" id="newBtn" onClick={pickedNew}>New</Button>
          <Button variant="outline-primary" id="seenBtn" onClick={pickedSeen}>Seen</Button>
        </Stack>
        <div id="wordout">...</div>
        <div>LIVES:  </div>
        <div id="lives" className='text-primary fs-3'>3</div>
        <textarea id="textArea" style={{height:'15rem'}} className="text-dark w-75">seen words are displayed here</textarea>

        <p className="fst-italic">You are shown words, one at a time. If you've seen a word during the test click SEEN. If it's a new word, click NEW.</p>

      </Stack>
    </>
  )
}

export default LocalProjects