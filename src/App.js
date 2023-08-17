import './App.css';
import {useState} from 'react';


function App() {

  const [meaning, setMeaning] = useState("");
  const emojiArr= Object.keys(emojiDictionary)
  
  function clickHandler(emoji){
    
    setMeaning(emojiDictionary[emoji])
    
  }

  function inputHandler(event) {

    setMeaning(emojiDictionary[event.target.value])

  }

  return (
    <div className="App">
      <h1>Emoji Bank</h1>
      <input type="text" className="input--field" placeholder="enter your emoji here" onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <ul className='emoji--list'>
        {emojiArr.map((emoji)=>{
          return(
            <li className="list-item-inline"key={emoji} onClick={()=>clickHandler(emoji)}>{emoji}</li>
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
"😏": "Smirking Face",
"😋":" Face Savoring Food",
"😛":" Face with Tongue",
"😜":"Winking Face with Tongue",
"🤪":"Zany Face",
"😝":"Squinting Face with Tongue",
"🤗":"Smiling Face with Open Hands",
"🤭":"Face with Hand Over Mouth",
"🫢":"Face with Open Eyes and Hand Over Mouth",
"🫣":"Face with Peeking Eye",
"🤫":"Shushing Face",
"🤔":"Thinking Face",
"🫡":"Saluting Face",
"🤤":"Drooling Face",
"🤠":"Cowboy Hat Face",
"🥳":"Partying Face",
"🥸":"Disguised Face",
"😎":"Smiling Face with Sunglasses",
"🤓":"Nerd Face",
"🧐":"Face with Monocle",
"🙃":"Upside-Down Face",
"🫠":"Melting Face",
"🤐":"Zipper-Mouth Face",
"🤨":"Face with Raised Eyebrow",
"😐":"Neutral Face",
"😑":"Expressionless Face",
"😶":"Face Without Mouth",
"🫥":"Dotted Line Face",
"😶‍🌫️":"Face in Clouds",
"😒":"Unamused Face",
"🙄":"Face with Rolling Eyes",
"😬":"Grimacing Face",
"🫨":"Shaking Face",
"😮‍💨":"Face Exhaling",
"🤥":"Lying Face",
"😌":"Relieved Face",
"😔":"Pensive Face",
"😪":"Sleepy Face",
"😴":"Sleeping Face",
"😷":"Face with Medical Mask",
"🤒":"Face with Thermometer",
"🤕":"Face with Head-Bandage",
"🤢":"Nauseated Face",
"🤮":"Face Vomiting",
"🤧":"Sneezing Face",
"🥵":"Hot Face",
"🥶":"Cold Face",
"🥴":"Woozy Face",
"😵":"Face with Crossed-Out Eyes",
"😵‍💫":"Face with Spiral Eyes",
"🤯":"Exploding Head",
"🥱":"Yawning Face",
"😕":"Confused Face",
"🫤":"Face with Diagonal Mouth",
"😟":"Worried Face",
"🙁":"Slightly Frowning Face",
"☹️":"Frowning Face",
"😮":"Face with Open Mouth",
"😯":"Hushed Face",
"😲":"Astonished Face",
"😳":"Flushed Face",
"🥺":"Pleading Face",
"🥹":"Face Holding Back Tears",
"😦":"Frowning Face with Open Mouth",
"😧":"Anguished Face",
"😨":"Fearful Face",
"😰":"Anxious Face with Sweat",
"😥":"Sad but Relieved Face",
"😢":"Crying Face",
"😭":"Loudly Crying Face",
"😱":"Face Screaming in Fear",
"😖":"Confounded Face",
"😣":"Persevering Face",
"😞":"Disappointed Face",
"😓":"Downcast Face with Sweat",
"😩":"Weary Face",
"😫":"Tired Face",
"😤":"Face with Steam From Nose",
"😡":"Enraged Face",
"😠":"Angry Face",
"🤬":"Face with Symbols on Mouth",
"👿":"Angry Face with Horns",
"😈":"Smiling Face with Horns",
"👿":"Angry Face with Horns",
"💀":"Skull",
"☠️":"Skull and Crossbones",
"💩":"Pile of Poo",
"🤡":"Clown Face",
"👹":"Ogre",
"👺":"Goblin",
"👻":"Ghost",
"👽":"Alien",
"👾":"Alien Monster",
"🤖":"Robot",
"😺":"Grinning Cat",
"😸":"Grinning Cat with Smiling Eyes",
"😹":"Cat with Tears of Joy",
"😻":"Smiling Cat with Heart-Eyes",
"😼":"Cat with Wry Smile",
"😽":"Kissing Cat",
"🙀":"Weary Cat",
"😿":"Crying Cat",
"😾":"Pouting Cat",
"🙈":"See-No-Evil Monkey",
"🙉":"Hear-No-Evil Monkey",
"🙊":"Speak-No-Evil Monkey",
}

export default App;
