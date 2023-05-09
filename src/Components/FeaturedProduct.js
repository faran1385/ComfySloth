import "bootstrap/dist/css/bootstrap.min.css"
export function FeaturedProduct(){
    return(
        <div className={"col-lg-4 mb-4"}>
            <div style={{height:"14rem"}} className={"w-100 placeholder placeholder-wave rounded-2"}></div>
            <div className={"d-flex justify-content-between mt-3"}>
                <div className={"col-4 placeholder placeholder-wave"}></div>
                <div className={"col-2 placeholder placeholder-wave"}></div>
            </div>
        </div>
    );
}