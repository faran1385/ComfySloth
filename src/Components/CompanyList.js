import {Company} from "./Company";
import {FilltersLoading} from "./FilltersLoading";

export function CompanyList(props){
    const {companies}=props
    if(!companies){
        return <FilltersLoading/>
    }
    return(
        <ul style={{fontWeight: "600"}}>
            <li  className={"list-unstyled"}>
                <a href={"#"} className={'text-decoration-none active category-name'}>All</a>
            </li>
            {companies.map(company => {
                return <Company key={company.id} companyProperties={company}/>
            })}
        </ul>
    );
}