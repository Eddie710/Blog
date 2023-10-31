import React, { Component } from "react";

function Login() {


    return(
        <>
            <div>
                <form>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username"/><br/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password"/><br/>
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        </>
    )
}

export default Login;