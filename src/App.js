import './App.css';
import Img from '../src/images/bottle_grande.png'
import Img2 from '../src/images/AppleRaspberry.png'
import { Card } from './Card';
// import { PlusMines } from './plusemines';

function App() {
  const data = [
            {
            img:Img,
            title:'Raspeberies Juice',
            volume:'250ml',
            prise:2.99
            },
            {

            img:Img2,
            title:'AppleRaspberry Juice',
            volume:'250ml',
            prise:3.19
            }
  ]
  return (
    <div className="App">
      <h1>Shoping Card</h1>
     {
      data.map((el,id)=>{
        return(
            <Card key={id} data={el}/>
        );
      })
     }
    </div>
  );
}

export default App;
