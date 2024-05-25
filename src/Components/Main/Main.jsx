import React, { useContext } from "react";
import "../../Styles/main.scss";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,newChat} = useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p onClick={()=>newChat()}>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>


      <div className="main-container">
      {
        !showResult ?
         <>
        <div className="greet">
          <p className="greet-span">
            <span>Hello, Dear</span>
          </p>
          <p className="greet-p">How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Breifly summaries this concept : Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card last">
            <p>Tell me about React Js and React Native </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </> : 

        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon}/>
            <p>{recentPrompt}</p>
          </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {
                loading ? <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div> 
                :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
        </div>
      }
      

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter prompt here" onChange={(e)=>setInput(e.target.value)} value={input}/>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
           {
            input ?  <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> :
            null
           }
          </div>
            <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
