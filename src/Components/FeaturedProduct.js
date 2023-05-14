import "bootstrap/dist/css/bootstrap.min.css"
import {useGlobalContextAPI} from "../context";
import {BiSearchAlt2} from "react-icons/bi"
import {useState} from "react";
export function FeaturedProduct(props){
    const {name,id,price,image}=props.productProperties
    const [featuredProductUnHovered,setFeaturedProductUnHovered]=useState(true)
    if(name){
        return (
            <div className={"col-lg-4 mb-4"}>
                <div className={"position-relative"} onMouseLeave={()=>setFeaturedProductUnHovered(true)}
                     onMouseEnter={()=>setFeaturedProductUnHovered(false)} style={{height:"14rem",cursor:"pointer"}}>
                    <img  src={image} className={"h-100 featured-product-img w-100 rounded-2"}/>
                    <div className={`position-absolute ${featuredProductUnHovered?"opacity-0":"opacity-100"} top-0 h-100 d-flex justify-content-center align-items-center start-0 rounded-2 w-100`}
                         style={{background:"rgb(0,0,0,.6)",transition:"all 200ms ease-in"}}>
                        <BiSearchAlt2 className={"text-white fs-1 rounded-circle p-1"} style={{background:"#ab7a5f"}}/>
                    </div>
                </div>
                <div className={"d-flex justify-content-between mt-3"}>
                    <div className={"col-6"}>
                        <p style={{fontWeight:"400"}}>{name}</p>
                    </div>
                    <div className={"col-4"}>
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