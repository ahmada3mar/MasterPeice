import logo from "../../assets/logo.png";
import {Link , Redirect} from "react-router-dom";




export default function Login(props) {
 





    return (
        <div className="row flex-grow-1 m-0">
           {props.isLogin ? <Redirect to="/home" /> : null}
            <div className="left-side  col-4 p-0">
                <div style={{ padding: '50px 35px' }}>
                    <img width={70} src={logo} alt="Orange Logo" />
                    <h1 className="mt-5">Think Twice Code Once! <br /> believe yourself</h1>
                    <h1 className="text-primary">Orange Coding Academy</h1>
                    <p>Watch exclusive series, Hollywood movies, Arabic series, kids’ shows, documentaries and more.</p>
                    <div className="btn btn-primary">Discover More</div>
                </div>
            </div>

            <div className="right-side d-inline-flex align-items-center justify-content-center col flex-column">                
                <div className="form col-8">
                    <h2 className="mb-5">Sign in to <span className="text-primary">Orange</span></h2>
                    <div className="d-flex flex-column-reverse  mb-3">
                        <input type="email" class="form-control" id="email" />
                        <label id="labelEmail" htmlFor="email">Email</label>
                    </div>
                    <div className="d-flex flex-column-reverse  mb-3">
                        <input type="password" class="form-control" id="password" />
                        <label id="labelpassword" htmlFor="password">Password</label>
                    </div>
                    <Link onClick={()=>props.setIslogin(true)} to="/home" className="btn btn-primary col-12 justify-content-center  mb-3">Login</Link>
                    <Link className="text-primary" to="#">Forget Password ?</Link>
                </div>
            </div>
        </div>


    )
}