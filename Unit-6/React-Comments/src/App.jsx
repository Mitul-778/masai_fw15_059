import "./App.css";
import { useState } from "react";

const App = ({ data }) => {
  const [hide, sethide] = useState(false);

  if (data.replies) {
    return (
      <div>
        <div className="card">
          <div className="btnDiv">
            <button className="btn" onClick={() => sethide(!hide)}>
              +
            </button>
          </div>
          <div className="upperDiv">
            <div>
              <div className="timeDiv">
                <p>{data.author}</p>
                <p>{data.points} points</p>
                <p>{Math.floor(Math.random() * 59)} minutes ago</p>
              </div>
            </div>
            <div className="mainText">
              <p>{data.body}</p>
            </div>
            <div className="greyText">
              <p>Reply</p>
              <p>Give Award</p>
              <p>Share</p>
              <p>Report</p>
              <p>Save</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: hide ? "block" : "none",
            paddingLeft: "90px",
            borderLeft: "2px solid black",
            marginLeft: "8px",
          }}
        >
          {data.replies.map((e) => {
            return <App key={e.id} data={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card endCard">
        <div className="btnDiv hideBtn">
          <button className="btn" onClick={() => sethide(!hide)}>
            +
          </button>
        </div>
        <div className="upperDiv">
          <div>
            <div className="timeDiv">
              <p>{data.author}</p>
              <p>{data.points} points</p>
              <p>{Math.floor(Math.random() * 59)} minutes ago</p>
            </div>
          </div>
          <div className="mainText">
            <p>{data.body}</p>
          </div>
          <div className="greyText">
            <p>Reply</p>
            <p>Give Award</p>
            <p>Share</p>
            <p>Report</p>
            <p>Save</p>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
