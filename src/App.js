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
      <Card>
      <Item name={response[0].Itemname}    >helloo from nirma</Item>
      <Itemdata date={response[0].Itemdate} month={response[0].Itemmonth} year={response[0].Itemyear} ></Itemdata>
      <Item name={response[1].Itemname}></Item>
      <Itemdata date={response[1].Itemdate} month={response[1].Itemmonth} year={response[1].Itemyear} ></Itemdata>
      <Item name={response[2].Itemname}></Item>
      <Itemdata date={response[2].Itemdate} month={response[2].Itemmonth} year={response[2].Itemyear} ></Itemdata>
      <div className="App">hello </div>
      </Card>

    </div>
  );
}

export default App;
