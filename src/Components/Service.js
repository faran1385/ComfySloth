export function Service(props) {
    const {details,title,icon}=props.serviceProperties
    if (!title) {
        return (<div className={"col-lg-3 position-relative mb-lg-0 mb-5  rounded-2 offset-lg-1"}
                     style={{background: "#c5a491", height: "25rem"}}>
            <div className={"w-100 d-flex flex-column align-items-center pt-5"}>
                <div className={"rounded-circle  placeholder-wave placeholder p-3"}
                     style={{width: "4.5rem", height: "4.5rem"}}>
                </div>
                <div className={"container"}>
                    <div className={"row pt-4"}>
                        <div className={"col-8 offset-2 mb-4 placeholder placeholder-lg placeholder-wave"}></div>
                        <div className={"col-6 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-3 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-3 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-6 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-6 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-3 mb-3 offset-1 placeholder placeholder-wave"}></div>
                        <div className={"col-6 offset-3 placeholder placeholder-wave"}></div>
                    </div>
                </div>
            </div>
        </div>);
    }
    return (
        <div className={"col-lg-3 position-relative mb-lg-0 mb-5  rounded-2 offset-lg-1"}
             style={{background: "#c5a491", height: "25rem"}}>
            <div className={"w-100 d-flex flex-column align-items-center pt-5"}>
                <div className={"rounded-circle p-3"}
                     style={{background: "#eaded7", color: "#453227", width: "fit-content"}}>
                    <img src={icon} style={{width:"3rem"}} />
                </div>
                <h4 style={{color:"#453227"}} className={"mt-3 mb-sm-4 mb-1  mb-xl-3 mb-lg-3"}>{title}</h4>
                <p className={"mt-1 text-center lh-lg"}>{details}</p>
            </div>
        </div>
    );
}