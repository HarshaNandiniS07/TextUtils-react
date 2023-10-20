import React , {useState} from 'react'
// use state is a hook 

// const [text, setText] = useState('Enter the text here');
// first argument text is the default value that is shown 
// text can be updated using the setText function



export default function TextForm(props) {

    const handleUpClick=()=>{
     console.log("uppercase was clicked" );
     let newText=text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to uppercase !","success");
    }

    const handleUpClick1=()=>{
        console.log("lowercase was clicked" );
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to lowercase !","success");
       }

       const handleclear=()=>{
        console.log("your text is cleared");
        setText("");
        props.showAlert("your text is cleared ! u fool","success");
       }

       const handleV=()=>{

        let vowelCount = 0;
        const vowels = "aeiouAEIOU";
        for (let i = 0; i < text.length; i++) {
            if (vowels.indexOf(text[i]) !== -1) {
                vowelCount++;
            }
        }
        return vowelCount;

       }

    // when u click on that button the text inside the area wil be changed to the setText function text 
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        // now on adding the above line, typing in the text area which was previously not possible, now it becomes possible,typing continously it gets updated to the text that u are entering 
       }

       const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("sorry I cant speak!","Failed")
      }

      const removeSpace=()=>{
        let newText2 =text.split(/[ ]+/);
         setText(newText2.join(" "));
         props.showAlert("space is removed!","success");
      }


    const [text, setText] = useState('Enter the text here');
    // ;enter text here ' is the default value = text 

    // text="hey im the new text" -> wrong way to change the text, u can only change it using the above function, which is setText 
    // setText("hey im the new text") -> crt way 

    return (
        <>
        <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.textdis}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10">
        {/* {text} here is a state variable*/}
    </textarea>

    </div>

    <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase 
    </button>

    <button className="btn btn-primary mx-3" onClick={handleUpClick1}>
        Convert to lowercase
    </button>

    <button className="btn btn-primary" onClick={handleclear}>
        clear the text 
    </button>

    <button className="btn btn-primary mx-3" onClick={handleV}>
        find out number of vowels
    </button>
    </div>

    <button onClick={speak} className="btn btn-warning mx-2 my-2">
        Speak
        </button>


        <button onClick={removeSpace}type="button" class="btn btn-primary my-3 mx-3"> 

        Remove extra space

        </button>


    <div className="container my-3">
        {/* my-3 leaves a space of 3 in the y axis */}
    <h1> Your text summary</h1>
    <p> {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    {/* {text.split(" ").length} -> gives the number of words, {text.length} -> gives the number of characters that are being , it gives a live update of it as we enter the number of word  */}

    <p>{(0.008*text.split(" ").length).toFixed(2)} minutes read </p>
    <h2>preview</h2>
    <p>{text}</p>
    <p>Number of vowels</p>
    <p>{handleV(text)}</p>

    </div>
    </>
  ) 
} 

// as u increase the rows size in the above code, the size of the textbox increases 
// instead of for = htmlFor
//  instead of class = className



