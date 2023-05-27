import {useGlobalContextAPI} from "../context";
import {FeaturedProduct} from "./FeaturedProduct";
import {ProductSingleLine} from "./ProductSingleLine";

export function ProductList() {
    //getting products layout and filters
    const {filters, isSingleLineLayout} = useGlobalContextAPI()
    //getting products
    const {products} = filters
    return (
        <div className={"col-lg-10 col-12 mb-5"}>
            <div className={"row mt-5"}>
                {products !== undefined ? (products.map(product => {
                    return isSingleLineLayout ? <ProductSingleLine key={product.id} productProperties={product}/>
                        : <FeaturedProduct key={product.id} productProperties={product}/>
                })) : ""}
            </div>
        </div>
    );
}