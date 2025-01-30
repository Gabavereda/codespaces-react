import './App.css';


function MyButton(){

  return(
    <button>I'm a button</button>
  );

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
      <p>so i decide to code in react</p>
      <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>


      </header>
    </div>
  );
}

export default App;
