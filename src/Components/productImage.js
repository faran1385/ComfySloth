export function ProductImage(props) {
    const {setProduct,source,product,active_image}=props.productStuff
    return (
        <div className={"col-4 mt-3 mb-2 user-select-none"} style={{cursor: "pointer"}}>
            <img onClick={() => setProduct({...product, active_image: source})}
                 src={`http://localhost:8000${source}`} style={{height: "5rem"}}
                 className={`w-100 rounded-2 ${source === active_image ? "active" : ""} product-image`}/>
        </div>
    );
}