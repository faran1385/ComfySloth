import {GiHamburgerMenu} from "react-icons/gi"
import {GrAppsRounded} from "react-icons/gr"

export function SortBy() {
    return (
        <div className={"col-10"}>
            <div className={"row align-items-center"}>
                <div className={'col-2 d-flex'}>
                    <div style={{width: "2rem", height: "2rem"}}
                         className={"justify-content-center align-items-center cursor-pointer rounded-1 d-flex me-2 border p-1"}>
                        <GrAppsRounded className={"fs-2"}/>
                    </div>
                    <div style={{width: "2rem", height: "2rem"}}
                         className={"justify-content-center align-items-center cursor-pointer rounded-1 d-flex me-2 border p-1"}>
                        <GiHamburgerMenu className={"fs-2"}/>
                    </div>
                </div>
                <div className={"col-2"}>
                    <div>
                        <span>22 Products Found</span>
                    </div>
                </div>
                <div className={"col-6 bg-black"} style={{height:"1px"}}></div>
            </div>
        </div>
    );
}