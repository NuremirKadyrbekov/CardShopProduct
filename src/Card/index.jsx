import { PlusMines } from "../plusemines";

export const Card =({data}) =>{
  
    return(
        <div className="CardMain"> 
            <div className='Card'> 
           <img src={data.img} alt="" className="Img" />
           <p className="NameProduct">{data.title}</p>
           <p className="VolumeProduct">{data.volume}</p>
           <div className="box"><div className="green"></div></div>
           <div><PlusMines/></div>
          </div>
         </div>
    );
}