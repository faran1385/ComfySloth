import {useEffect, useState} from "react";
import axios from "axios";
import {useGlobalContextAPI} from "../context";
import {UserBasketProduct} from "../Components/userBasketProduct";
import "../dist/css/App.css"

export function Cart() {
    const {token, username} = useGlobalContextAPI()
    const [basketProducts, setBasketProducts] = useState([])
    const {base_url} = useGlobalContextAPI()
    const [totalPrice, setTotalPrice] = useState(0)
    let requestInfo = {
        token,
        username
    }

    async function fetchData() {
        try {
            let res = await axios.post(base_url + '/card/get-card/', requestInfo, {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            if (res.status === 200) {
                await setBasketProducts(res.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        //calculating total price
        calculateTotalPrice()
    }, [basketProducts])

    function calculateTotalPrice() {
        let TotalPrice = 0
        console.log(basketProducts)
        basketProducts.forEach(product => {
            TotalPrice += product.count * product.product.price
        })
        setTotalPrice(TotalPrice)
    }

    return (
        <>
            <div className={'container my-5'}>
                <div className={"row"}>
                    <div className={"col-lg-8 col-12"}>
                        {basketProducts.map((product, index) => {
                            return <UserBasketProduct setBasketProducts={setBasketProducts}
                                                      productBasket={basketProducts} productProps={product}
                                                      key={product.id}/>
                        })}
                    </div>
                    <div className="col-lg-4 col-12">
                        <div
                            className="flex-column border rounded-2 position-sticky shadow-lg top-0 my-lg-3 my-0 p-3">
                            <div className={"d-flex mb-2 justify-content-between align-items-baseline"}>
                                <h5 style={{fontWeight: 400}}>total price:</h5>
                                <small style={{fontWeight: 400}}>{totalPrice.toLocaleString()}</small>
                            </div>
                            {basketProducts.map((product, index) => {
                                return <div key={index}
                                            className={"d-flex mb-2 justify-content-between align-items-baseline"}>
                                    <p style={{fontWeight: 200}}>{product.product.name}</p>
                                    <small style={{fontWeight: 400}}>
                                        {Number(product.product.price * product.count).toLocaleString()} ( {product.count} )</small>
                                </div>
                            })}
                            <div className={"d-grid"}>
                                <button className={"btn btn-primary"}>Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}