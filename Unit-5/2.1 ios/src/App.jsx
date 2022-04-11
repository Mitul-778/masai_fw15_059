
import './App.css';


function App() {
  var data = [{
    heading:"Mobile Operating System",
    os:["Android","Blackberry","iPhone","Windows Phone"]
  },{
    heading:"Mobile Manufacturer",
    os:["Samsung","HTC","Micromax","Apple"]
  }]
  return (
    <div className="App">
    {data.map((el)=>{
     return <Mobile heading={el.heading} os={el.os}/>
    })}
    </div>
  );
}

function Mobile(props){
  return(
    <div>
      <h3>{props.heading}</h3>
      <ul>{props.os.map((el,index)=>{return <li className={`${index<2 ? "squareList" :"circleList"}`}>{el}</li> })}</ul>
    </div>
  )
}

export default App;
