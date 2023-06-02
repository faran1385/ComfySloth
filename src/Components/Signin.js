export function Signin() {
    return (
        <div className={"container"}>
            <div className={"row pt-5 justify-content-center"}>
                <form action={"http://localhost:8000/user/create-user"} novalidate={false} method={"post"} className={"col-4 p-3 rounded-2 "} style={{background:"#F5F5F5"}}>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#username"} style={{fontWeight:400}}>username</label>
                        <input className={"form-control"} type={"text"} id={"username"} autoComplete={"off"}/>
                    </div>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#password"} style={{fontWeight:400}}>password</label>
                        <input className={"form-control"} type={"password"} id={"password"} autoComplete={"off"}/>
                    </div>
                    <div className={"mb-3"}>
                        <label className={"form-label"} htmlFor={"#email"} style={{fontWeight:400}}>email</label>
                        <input className={"form-control"} type={"email"} id={"email"} autoComplete={"off"}/>
                    </div>
                    <div className={"mt-5"}>
                        <input className={"form-control"} value={"submit"} type={"submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
}