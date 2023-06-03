import {BiHide, BiShow} from "react-icons/bi";
import {Link} from "react-router-dom";

export function EmailConfirmed() {
    return (
        <div className={"w-100 h-100 py-5"} style={{background: "#333"}}>
            <div className={"container pb-5 "}>
                <div className={"row justify-content-center"}>
                    <div className={"col-12 col-sm-8 p-5 rounded-2 bg-white"}>
                        <h1 className={"text-center"} style={{fontWeight: 400}}>Your email confirmed</h1>
                        <h5 className={"text-center"} style={{fontWeight: 400}}>We send your password to <span
                            style={{cursor: "pointer", color: "rgb(25, 191, 211)"}}>Here</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}