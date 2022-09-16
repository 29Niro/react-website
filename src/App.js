import './App.css';
import Right from './images/right.svg'
import Left from './images/left.svg'
import RightBottom from './images/right-bottom.svg'

function App() {
  return (
    <div className='container'>
      <img src={Left} id='left'/>
      <img src={Right} id='right'/>
      {/* <img src={RightBottom} id='right-bottom'/> */}

      <nav>
        <a href='#' id='logo'>NS TECZONE</a>

        <ul>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>About us</a></li>
        </ul>
      </nav>

      <div className='sub-container'>
        <h1>Welcome to our site</h1>
        <p>lorem chacn sdhchdochwo s sn  nsbcb  dccecn oihoehcoiawh hiochnwoicnawuinai hu hc hikubdcikbu kcbuibciucb  nuaiunwaii siiabwia</p>
      </div>
    </div>
  );
}

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

export default App;
