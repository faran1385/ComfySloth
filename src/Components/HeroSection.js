import "../index.css"

export function HeroSection() {
    return (
        <div style={{width:"100%",height:"50rem"}}>
            <div className={"container"} style={{height:"max-content",marginTop:"7rem"}}>
                <div className={"row"}>
                    <div className={"col-lg-6 d-flex mt-5 mt-lg-0 justify-content-center flex-column"}>
                        <h1 className={"fw-bold text-md-start text-center"}>Design Your</h1>
                        <h1 className={"fw-bold text-md-start text-center"}>Comfort Zone</h1>
                        <p className={"mt-5 lh-lg  text-muted fs-4"}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis
                            doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia
                            tempora excepturi quis alias?
                        </p>
                        <div className={"d-flex justify-content-center justify-content-lg-start"}>
                            <button className={"shadow text-white shop-btn"}>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={"col-6"}>
                        <div
                            className={"hero-section-image position-relative d-none d-lg-flex ps-5 pt-5 justify-content-center"}>
                            <img style={{width: "15.635rem", height: "10.328125rem", left: "1%"}}
                                 src={"https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"}
                                 className={"rounded-2 position-absolute bottom-0 "}/>
                            <img style={{width: "27.5rem", height: "34.375rem"}}
                                 src={"https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"}
                                 className={"rounded-2"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}