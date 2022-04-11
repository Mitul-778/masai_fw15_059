import logo from './logo.png';
import './App.css';

function App() {
  const list = ["Service","Projects","About"]
  return (
    <nav className="App">
      <Logo img={logo}/>
      <Options data={list}/>
      <Button/>
    </nav>
  );
}

function Logo({img}){
  return <img src={img} alt="" />
}

function Options({data}){
  return <div className='options'>
    {data.map((el)=>{
      return <h4>{el}</h4>
    })}
  </div>
}

function Button(){
return <button>Contact</button>
}

export default App;
