import {GiHamburgerMenu} from "react-icons/gi"
import {TbLayoutGrid} from "react-icons/tb"
import {useGlobalContextAPI} from "../context";
import {useState} from "react";

export function SortBy() {
    //getting the value of product filters and the function that changes them
    const {filteredProduct,setActive}=useGlobalContextAPI()
    //getting filters and the function that changes layout
    const {filters,setSingleLineLayout} = useGlobalContextAPI()
    //getting products length
    const {products} = filters
    return (
        <div className={"col-12"}>
            <div className={"row align-items-center"}>
                <div className={"col-2"}>
                    <input className={"form-control border-0"} style={{background: "#f1f5f8"}}
                           placeholder={'Search'}/>
                </div>
                <div className={'col-1 d-flex'}>
                    <div style={{width: "2rem", height: "2rem"}} onClick={()=>setSingleLineLayout(false)}
                         className={"justify-content-center align-items-center  rounded-1 d-flex me-2 border"}>
                        <label className={'layout-container'}>
                            <input type={"radio"} name={"layout"} defaultChecked={true}/>
                            <div className={"rounded-1"}>
                                <TbLayoutGrid className={"fs-2"}/>
                            </div>
                        </label>
                    </div>
                    <div style={{width: "2rem", height: "2rem"}} onClick={()=>setSingleLineLayout(true)}
                         className={"justify-content-center align-items-center  rounded-1 d-flex me-2 border"}>
                        <label className={'layout-container'}>
                            <input type={"radio"} name={"layout"}/>
                            <div className={"rounded-1"}>
                                <GiHamburgerMenu className={"fs-2"}/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className={"col-2"}>
                    <div>
                        <span>{!products ? "?" : products.length} Products Found</span>
                    </div>
                </div>
                <div className={"col-5 bg-black"} style={{height: "1px"}}></div>
                <div className={"col-2 ps-2 d-flex align-items-center"}>
                    <span className={"me-2"}>Sort By</span>
                    <div className="dropdown-center">
                        <button className="btn bg-white border-0 dropdown-toggle" data-bs-toggle="dropdown">
                            {filteredProduct.sortBy}
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={(event) =>{
                                //changing the filter product every time sort by changes
                                setActive("sortBy",event.target.textContent)
                            }}><a
                                className="dropdown-item" href="#">Price (Lowest)</a></li>
                            <li onClick={(event) =>{
                                //changing the filter product every time sort by changes
                                setActive("sortBy",event.target.textContent)
                            }}><a
                                className="dropdown-item" href="#">Price (Highest)</a></li>
                            <li onClick={(event) =>{
                                //changing the filter product every time sort by changes
                                setActive("sortBy",event.target.textContent)
                            }}><a
                                className="dropdown-item" href="#">Name (A-Z)</a></li>
                            <li onClick={(event) =>{
                                //changing the filter product every time sort by changes
                                setActive("sortBy",event.target.textContent)
                            }}><a
                                className="dropdown-item" href="#">Name (Z-A)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}