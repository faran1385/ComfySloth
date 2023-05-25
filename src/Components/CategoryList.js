import {Category} from "./Category";
import {FilltersLoading} from "./FilltersLoading";

export function CategoryList(props) {
    const {categories} = props
    if (!categories) {
        return <FilltersLoading/>
    }
    return (
        <ul style={{fontWeight: "600"}}>
            <li className={"list-unstyled"}>
                <a href={"#"} className={'text-decoration-none active category-name'}>All</a>
            </li>
            {categories.map(category => {
                return <Category key={category.id} categoryProperties={category}/>
            })}
        </ul>
    );
}