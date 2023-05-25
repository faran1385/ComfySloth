
export function Category(props){
    const {category,id}=props.categoryProperties
    return(
        <li key={id} className={"list-unstyled"}>
            <a href={"#"}
               className={'text-decoration-none category-name'}>{category}</a>
        </li>
    );
}