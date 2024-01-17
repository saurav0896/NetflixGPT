import Header from "./Header"

const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg" alt="background" />
            </div>
            <form className="relative p-12 bg-black">
                <input className="p-2 m-2" type="text" placeholder="Email Address"/>
                <input className="p-2 m-2" type="password" placeholder="Password"/>
                <button className="p-4 m-4">Sign In</button>
            </form>
        </div>
    )
}

export default Login