import {Link} from "react-router-dom";

export function NotFound(){
    return(
        <div className={"container mt-5"}>
            <div className={"row"}>
                <h1 className={"text-center mb-3"}>The page that your looking for does not exist !</h1>
                <div className={"d-flex justify-content-center mt-4"}>
                    <Link to={"/"}>
                        <button className={"btn btn-primary"}>Go Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}