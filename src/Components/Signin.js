export function Signin() {
    return (
        <div className={"w-100 h-100"} style={{background: "#333"}}>
            <div className={"container"}>
                <div className={"row pt-5 mt-5 justify-content-center"}>
                    <form action={"http://localhost:8000/user/create-user"} method={"post"}
                          className={"col-4 p-4 rounded-2 bg-white"}>
                        <div>
                            <h2 style={{fontWeight:400}} className={"text-center"}>Sign in</h2>
                        </div>
                        <div className={"pt-4"}>
                            <label className={"form-label fs-6"} style={{fontWeight:400}}>Username</label>
                            <input autoComplete={"off"}  type={"text"} id={"username"} className={"form-control"} name={"username"}/>
                        </div>
                        <div className={"pt-4"}>
                            <label className={"form-label fs-6"} style={{fontWeight:400}}>Password</label>
                            <input autoComplete={"off"}  type={"password"} id={"password"} className={"form-control"} name={"password"}/>
                        </div>
                        <div className={"pt-4"}>
                            <label className={"form-label fs-6"} style={{fontWeight:400}}>Email</label>
                            <input autoComplete={"off"}  type={"email"} id={"email"} className={"form-control"} name={"email"}/>
                        </div>
                        <div className={"pt-5"}>
                            <input type={"submit"} className={"form-control fs-6 shadow-none submit"} style={{fontWeight:500,transition:"all ease-in 500ms"}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}