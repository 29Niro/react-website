import './App.css';

function App() {
  return (
    <div>
      <h1>Hello JS</h1>
      <Welcome name="Niro"/>
    </div>
  );
}

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

export default App;
