export function About() {
    return (
        <div className={"container mt-5 mb-5"}>
            <div className={"row pt-5"}>
                <div className={"col-lg-6 d-none  mb-5 d-lg-flex justify-content-center"}>
                    <img src={"https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"}
                    style={{width:"-webkit-fill-available",height:"30rem"}}
                         className={"rounded"}/>
                </div>
                <div className={"ps-lg-5 col-lg-6 mb-lg-0 mb-5 d-flex align-items-lg-start flex-column align-items-center"}>
                    <h1>Our story</h1>
                    <div style={{width:"6rem",backgroundColor:"#ab7a5f",height:"4px"}} className={"mb-4"}></div>
                    <p className={"lh-lg text-lg-start text-center"} style={{color:"#617d98"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Fugiat accusantium sapiente tempora sed dolore esse deserunt e
                        aque excepturi, delectus error accusamus vel eligendi, omnis beatae
                        . Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore,
                        obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus
                        saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur a
                        rchitecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe
                        sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </div>
            </div>
        </div>
    );
}