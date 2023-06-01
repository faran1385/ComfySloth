import {useFetcher, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetch} from "../useFetch";
import {useGlobalContextAPI} from "../context";
import {StarList} from "../Components/StarList";
import {ProductImageList} from "../Components/productImageList";
import {BsCheckLg} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {BiMinus} from "react-icons/bi";

export function Product() {
    //product count
    const [productCount, setProductCount] = useState(1)
    const {FetchCaller} = useGlobalContextAPI()
    //getting product id by url parameters
    const params = useParams()
    //product information
    const [product, setProduct] = useState(null)
    //getting product id and setting it on product state
    useEffect(() => {
        FetchCaller(`http://127.0.0.1:8000/product/api/detail/${params.productId}/`, setProduct)
    }, [])
    if (product === null) {
        return <>

        </>
    }
    const {active_image, images, name, score, views, sku, price, description, available} = product[0]
    const {brand} = product[1]
    const {color} = product[2]
    console.log(product[2])
    return (
        <div className={"container pt-5"}>
            <div className={"row"}>
                <div className={"col-lg-5"}>
                    <img className={"rounded-2 w-100"} src={`http://localhost:8000${active_image}`}
                         style={{height: "25rem"}}/>
                </div>
                <div className={"col-lg-7 ps-5"}>
                    <h1 style={{fontWeight: 400}}>{name}</h1>
                    <div className={"d-flex align-items-center"}>
                        <StarList starScore={score}/>
                        <span className={"ps-4"} style={{fontWeight: 400}}>{views} customer reviews</span>
                    </div>
                    <div>
                        <p style={{color: "#ab7a5f", fontWeight: 600}}
                           className={"pt-1 fs-4"}>${Number(price).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className={"text-muted"} style={{fontWeight: 600}}>{description}</p>
                    </div>
                    <div className={"row pb-2 align-items-baseline"}>
                        <div className={"col-3"}>
                            <p className={"p-0 m-0"} style={{fontWeight: 500}}>Available :</p>
                        </div>
                        <div className={"col-9"}>
                            <p className={"m-0 text-muted"}
                               style={{fontWeight: 500}}>{available ? "In Stock" : "Out Of Stock"}</p>
                        </div>
                    </div>
                    <div className={"row pb-2 align-items-baseline"}>
                        <div className={"col-3"}>
                            <p className={"p-0 m-0"} style={{fontWeight: 500}}>SKU :</p>
                        </div>
                        <div className={"col-9"}>
                            <p className={"m-0 text-muted"} style={{fontWeight: 500}}>{sku}</p>
                        </div>
                    </div>
                    <div className={"row pb-2 align-items-baseline"}>
                        <div className={"col-3"}>
                            <p className={"p-0 m-0"} style={{fontWeight: 500}}>Brand :</p>
                        </div>
                        <div className={"col-9"}>
                            <p className={"m-0 text-muted"} style={{fontWeight: 500}}>{brand}</p>
                        </div>
                    </div>
                    <div className={"row pb-2 align-items-end"}>
                        <div className={"col-3"}>
                            <p className={"p-0 m-0"} style={{fontWeight: 500}}>color :</p>
                        </div>
                        <div className={"col-9"}>
                            <span
                                className={"text-muted d-flex position-relative justify-content-center align-items-center rounded-circle d-block"}
                                style={{background: `#${color}`, width: "1.5rem", height: "1.5rem", top: ".2rem"}}>
                                <BsCheckLg className={"text-white fw-bold"}/>
                            </span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"row justify-content-between align-items-center"}>
                        <div className={"col-9"}>
                            <span className={"fs-4"}>${Number(price).toLocaleString()}</span>
                        </div>
                        <div className={"col-3 d-flex justify-content-end align-items-center "}>
                            {/*<button className={"buy-btn btn"}>Add To Cart</button>*/}
                            <BiMinus className={"me-3 user-select-none"} style={{cursor: "pointer"}}
                                     onClick={() => setProductCount(prevState => prevState - 1)}/>
                            <span className={"fs-5 user-select-none"}>{productCount}</span>
                            <AiOutlinePlus className={"ms-3 user-select-none"} style={{cursor: "pointer"}}
                                           onClick={() => setProductCount(prevState => prevState + 1)}/>
                        </div>
                    </div>
                </div>
                <div className={"col-lg-5"}>
                    <div className={"row"}>
                        <ProductImageList productStuff={{product, setProduct, active_image}} productImages={images}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
