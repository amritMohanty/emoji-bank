import './App.css';
import {useState} from 'react';


function App() {

  const [meaning, setMeaning] = useState("");
  const emojiArr= Object.keys(emojiDictionary)
  
  function clickHandler(emoji){
    // setMeaning(event.target.value)
    // console.log(emoji)
    setMeaning(emojiDictionary[emoji])
    
  }

  function inputHandler(event) {
    // console.log(emojiDictionary[event.target.value])
    setMeaning(emojiDictionary[event.target.value])
  }

  return (
    <div className="App">
      <h1>Emoji Bank</h1>
      <input type="text" className="input--field" placeholder="enter your emoji here" onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <ul>
        {emojiArr.map((emoji)=>{
          return(
            <li key={emoji} onClick={()=>clickHandler(emoji)}>{emoji}</li>
          )
        })}
      </ul>
    </div>
  );
}

const emojiDictionary = {
"😀": "Grinning Face",
"😃": "Grinning Face with Big Eyes",
"😄": "Grinning Face with Smiling Eyes",
"😁": "Beaming Face with Smiling Eyes",
"😆": "Grinning Squinting Face",
"😅": "Grinning Face with Sweat",
"🤣": "Rolling on the Floor Laughing",
"😂": "Face with Tears of Joy",
"🙂": "Slightly Smiling Face",
"😉": "Winking Face",
"😊": "Smiling Face with Smiling Eyes",
"😇": "Smiling Face with Halo",
"🥰": "Smiling Face with Hearts",
"😍": "Smiling Face with Heart-Eyes",
"🤩": "Star-Struck",
"😘": "Face Blowing a Kiss",
"😗": "Kissing Face",
"☺️": "Smiling Face",
"😚": "Kissing Face with Closed Eyes",
"😙": "Kissing Face with Smiling Eyes",
"🥲": "Smiling Face with Tear",
"😏": "Smirking Face"
}

export default App;
