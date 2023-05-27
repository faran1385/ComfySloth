import "bootstrap/dist/css/bootstrap.min.css"
import {useGlobalContextAPI} from "../context";
import {BiSearchAlt2} from "react-icons/bi"
import {useState} from "react";
export function FeaturedProduct(props){
    const {name,price,image_one}=props.productProperties
    //rendering the products
    if(name){
        return (
            <div className={"col-lg-4 mb-4"}>
                <div className={"position-relative"}  style={{height:"14rem",cursor:"pointer"}}>
                    <img  src={'http://localhost:8000'+image_one} className={"h-100 featured-product-img w-100 rounded-2"}/>
                    <div className={`product-image-backdrop`}
                    >
                        <BiSearchAlt2 className={"text-white fs-1 rounded-circle p-1"} style={{background:"#ab7a5f"}}/>
                    </div>
                </div>
                <div className={"d-flex justify-content-between mt-3"}>
                    <div className={"col-6"}>
                        <p style={{fontWeight:"400"}}>{name}</p>
                    </div>
                    <div className={"col-4"}>
                        <p style={{fontWeight:"400",color:"#ab7a5f"}} className={"text-end"}>${Number(price).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        );
    }
    //if products was not load it renders loading
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