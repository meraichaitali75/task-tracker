import react, { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // <h1>Login Form</h1>
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Email: ${email} \nPassword: ${password}`);
    };

    return (
        <div className="logincontainer">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <input type="email"
                        name="email"
                        value={email}
                        required
                        autoComplete="false"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input type="password"
                        name="password"
                        value={password}
                        required
                        autoComplete="false"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );

};

export default Login;
