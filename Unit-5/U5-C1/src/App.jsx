import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState({
    score: 76 ,
    wicket:2,
    over:50,
  })
 
  const handleChange=(type,val)=>{
    if(data.score>=100 || data.wicket>=12){
      return ;
     }
    else if(type==="score"){
      setData({...data, score: data.score+val})
    }else if(type==="wicket"){
      setData({...data,wicket:data.wicket+val})
    }else{
      setData({...data, over: data.over+val})
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{}
          <h1 className="scoreCount">
            {
              // show "score" here
              data.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              data.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              (data.over/6).toFixed(1)
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handleChange("score",1)} className="addScore1">Add 1</button>
        <button onClick={()=>handleChange("score",4)} className="addScore4">Add 4</button>
        <button onClick={()=>handleChange("score",6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleChange("wicket",1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleChange("over", 1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
     
       data.score>=100 ? <h1 className='status'>India Won</h1>: ""
      }
    </div>
  );
}

export default App;
