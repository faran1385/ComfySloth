
export function Company(props){
    const {id,company}=props.companyProperties
    return(
        <li key={id} className={"list-unstyled"}>
            <a href={"#"}
               className={'text-decoration-none category-name'}>{company}</a>
        </li>
    );
}