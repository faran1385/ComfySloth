import "bootstrap/dist/css/bootstrap.min.css"
import "../index.css"
import {FeaturedProduct} from "./FeaturedProduct";

export function FeaturedProducts() {
    return (
        <div className={"w-100 py-5"} style={{backgroundColor: "#f1f5f8"}}>
            <div className={"bg-inherit"}>
                <div>
                    <h1 className={"text-center"}>Featured Products</h1>
                    <div className={"d-flex justify-content-center mb-5"}>
                        <div className={"title-underline"}></div>
                    </div>
                </div>
                <div className={"pt-5"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                        </div>
                        <div className={"d-flex justify-content-center pt-4"}>
                            <button className={"btn shop-btn shadow text-white"}>ALL PRODUCTS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}