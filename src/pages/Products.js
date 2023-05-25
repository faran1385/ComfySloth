import {Filters} from "../Components/filters";
import {SortBy} from "../Components/SortBy";

export function Products(){
    return(
        <div className={"container-lg mt-5"}>
            <div className={"row"}>
                <Filters/>
                <SortBy/>
            </div>
        </div>
    );
}