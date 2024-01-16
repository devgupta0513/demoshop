import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Itemdata from './components/Itemdata';
import Card from './components/Card';

function App() {
  const response = [
    {
      Itemname:"Nirma",
      Itemdate:"20",
      Itemmonth:"june",
      Itemyear:"1659"
    },
    {
      Itemname:"Tide",
      Itemdate:"10",
      Itemmonth:"july",
      Itemyear:"1985"

    },
    {
      Itemname:"surf excel",
      Itemdate:"30",
      Itemmonth:"august",
      Itemyear:"2005"
    }
  ]
  return (
    <div >
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      

    </div>
  );
}

export default App;
