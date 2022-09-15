import './App.css';

function App() {
  return (
    <div>
      <h1>Hello JS</h1>
      <Welcome name="Niro"/>
      <svg>
        <polygon points='10 33 10 1 34 17'></polygon>
      </svg>
    </div>
  );
}

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

export default App;
