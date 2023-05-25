import {useGlobalContextAPI} from "../context";
import {FilltersLoading} from "./FilltersLoading";

export function MaxPrice(props){
    const {maxPrice,minPrice}=props
    const {price,setPrice}=useGlobalContextAPI()
    if(!maxPrice||!minPrice){
        return <FilltersLoading/>
    }
    return(
        <ul>
            <p className={""}>${price===0?minPrice.toLocaleString():Number(price).toLocaleString()}</p>
            <input  value={price} onChange={(event) => setPrice(event.target.value)}
                    type={"range"} min={minPrice} max={maxPrice}/>
        </ul>
    );
}