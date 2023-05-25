import {ProductColor} from "./ProductColor";
import {FilltersLoading} from "./FilltersLoading";

export function ColorList(props){
    const {colors}=props
    if(!colors){
        return <FilltersLoading/>
    }
    return(
        <ul style={{paddingRight: "2rem"}}>
            <div className={"row justify-content-baseline"}>
                <div className={"col-2"}>
                    <label className="radio-container">
                        <input className={""} name={"color"} type={"radio"} defaultValue={true}/>
                        <span className={"d-flex justify-content-center"}
                              style={{bottom: "-.9rem", top: "initial"}}>All</span>
                    </label>
                </div>
                {colors.map(color => {
                    return <ProductColor key={color.id} colorProperties={color}/>
                })}
            </div>
        </ul>
    );
}