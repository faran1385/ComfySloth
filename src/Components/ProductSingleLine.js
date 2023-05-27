import {BiSearchAlt2} from "react-icons/bi";

export function ProductSingleLine(props) {
    const {image_one, name, price} = props.productProperties
    if (!props.productProperties) {
        return <div className={"ps-5 row d-flex mb-5"}>
            <div className={"position-relative col-lg-4 p-0"} style={{height: "14rem", cursor: "pointer"}}>
                <div className={"h-100 placeholder placeholder-wave featured-product-img w-100 rounded-2"}></div>
            </div>
            <div className={"col-lg-8 p-4"}>
                <div className={"row p-4 flex-column"}>
                    <div className={"col-3 mb-4 placeholder placeholder-wave"}></div>
                    <div className={"col-1 placeholder-wave placeholder mb-4"}></div>
                    <div className={"col-8 placeholder-wave placeholder mb-2"}></div>
                    <div className={"col-3 placeholder-wave placeholder mb-3"}></div>
                    <div className={"col-2 placeholder-wave placeholder"}></div>
                </div>
            </div>
        </div>
    }
    return (
        <div className={"ps-5 row d-flex mb-5"}>
            <div className={"position-relative col-lg-4 p-0"} style={{height: "14rem", cursor: "pointer"}}>
                <img src={'http://localhost:8000' + image_one}
                     className={"h-100 featured-product-img w-100 rounded-2"}/>
                <div className={`product-image-backdrop`}>
                    <BiSearchAlt2 className={"text-white fs-1 rounded-circle p-1"} style={{background: "#ab7a5f"}}/>
                </div>
            </div>
            <div className={"col-lg-8 p-4"}>
                <h3 style={{fontWeight: 400}}>{name}</h3>
                <p style={{color: "#b99179", fontWeight: 600}}>${price}</p>
                <p></p>
            </div>
        </div>
    );
}