import "bootstrap/dist/css/bootstrap.min.css"
import {useGlobalContextAPI} from "../context";
export function FeaturedProduct(props){
    const {name,id,price,image}=props.productProperties
    if(name!==null){
        return (
            <div className={"col-lg-4 mb-4"}>
                <img src={image} style={{height:"14rem"}} className={"w-100 rounded-2"}/>
                <div className={"d-flex justify-content-between mt-3"}>
                    <div className={"col-6"}>
                        <p style={{fontWeight:"400"}}>{name}</p>
                    </div>
                    <div className={"col-2"}>
                        <p style={{fontWeight:"400",color:"#ab7a5f"}} className={"text-end"}>${price}</p>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className={"col-lg-4 mb-4"}>
            <div style={{height:"14rem"}} className={"w-100 placeholder placeholder-wave rounded-2"}></div>
            <div className={"d-flex justify-content-between mt-3"}>
                <div className={"col-4 placeholder placeholder-wave"}></div>
                <div className={"col-2 placeholder placeholder-wave"}></div>
            </div>
        </div>
    );
}