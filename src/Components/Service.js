import {GiCompass} from "react-icons/gi"

export function Service() {
    return (
        <div className={"col-lg-3 position-relative mb-lg-0 mb-5  rounded-2 offset-lg-1"}
             style={{background: "#c5a491",height:"22rem"}}>
            <div className={"w-100 d-flex flex-column align-items-center pt-5"}>
                <div className={"rounded-circle p-3"}
                     style={{background: "#eaded7", color: "#453227", width: "fit-content"}}>
                    <GiCompass className={"fs-1"}/>
                </div>
                <p className={"mt-4 text-center lh-lg"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti
                    reiciendis nesciunt rerum velit autem unde numquam nisi
                </p>
            </div>
        </div>
    );
}