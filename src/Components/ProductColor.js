import {BsCheckLg} from "react-icons/bs";

export function ProductColor(props) {
    const {id, color} = props.colorProperties
    return (
        <div key={id} className={"col-2 mb-2 pt-1"}>
            <label className="radio-container">
                <input className={""} name={"color"} type={"radio"}/>
                <span className={"d-flex justify-content-center align-items-center"}
                      style={{background: `#${color}`}}>
                    <BsCheckLg className={"text-white fw-bold"}/>
                </span>
            </label>
        </div>
    );
}