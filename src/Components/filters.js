import {useGlobalContextAPI} from "../context";
import {BsCheckLg} from "react-icons/bs"
import {useState} from "react";
import {CategoryList} from "./CategoryList";
import {CompanyList} from "./CompanyList";
import {ColorList} from "./ColorList";
import {MaxPrice} from "./MaxPrice";

export function Filters() {
    const {filters} = useGlobalContextAPI()
    const {category, color, company, maxprice, lowprice} = filters
    return (<div className={"col-lg-2"}>
            <div className="offcanvas-lg offcanvas-start" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div>
                            <input className={"form-control border-0"} style={{background: "#f1f5f8"}}
                                   placeholder={'Search'}/>
                            <div className="accordion mt-5" id="accordionPanel">
                                <div className="accordion-item border-0 border-bottom">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button bg-white collapsed shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne">
                                            Category
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                                        <div className="accordion-body p-0">
                                            <CategoryList categories={category}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 border-bottom">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed bg-white shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo">
                                            Company
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                        <div className="accordion-body p-0">
                                            <CompanyList companies={company}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 border-bottom">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed bg-white shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree">
                                            Colors
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                        <div className="accordion-body p-0 pb-2">
                                            <ColorList colors={color}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 border-bottom">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed bg-white shadow-none"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFour">
                                            Price
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                        <div className="accordion-body p-0">
                                            <MaxPrice maxPrice={maxprice} minPrice={lowprice}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-between p-3"}>
                            <span>Free Shopping</span>
                            <input className={"form-check-input"} style={{width: "1rem"}} type={"checkbox"}/>
                        </div>
                        <div className={"d-grid px-3  mt-4"}>
                            <button className={"btn btn-danger"}>clear filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}