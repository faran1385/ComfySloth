import {useEffect} from "react";
import axios from "axios";
import {useGlobalContextAPI} from "../context";
import {UserBasketProduct} from "../Components/userBasketProduct";

let token = localStorage.getItem('token')
let username = localStorage.getItem('username')

export function Cart() {
    const {base_url} = useGlobalContextAPI()
    let requestInfo = {
        token,
        username
    }

    async function fetchData() {
        let res = await axios.post(base_url + '/card/get-card/', requestInfo, {
            headers: {
                'Content-Type': "application-json"
            }
        })
        console.log(res)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className={'container my-5'}>
            <div className={"row"}>
                <UserBasketProduct/>
                <UserBasketProduct/>
                <UserBasketProduct/>
                <UserBasketProduct/>
            </div>
        </div>
    );
}