import React, { useState } from "react";

export const PlusMines = ({data})=>{
    const[result, setResult] = useState(1);
    const[er,setEr]= useState();
    const[prise,setPrise] = useState(2.19);
    // const[prise, setPrise]  = useState();
    const Add = () =>{
        setResult(result=> result + 1)
        setPrise(prise=>prise+2.19)
        }

    const Remove = () =>{
            if(result < 1){
                alert('Меньше некуда')
                 setEr(er=>"")        
        }else{
            setResult(result=> result -1)
             setPrise(prise=>prise-2.19)

        }
    }
        
    return(
      <div className="PlusMines">
         <button className="Pluse" onClick={Add}>+</button>
         <p className="result" >{result}</p>
         <button className="Mines" id="Mines" onClick={Remove}>-</button>
         <p>{er}</p>
         <p>{prise}$</p>
      </div>
    );
}