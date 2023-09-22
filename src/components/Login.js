import "../App.css";
import microsoft from "./pngwing.com.png";
import background from "./john-lee-oMneOBYhJxY-unsplash.jpg";

export default function Login(){
    return(
        <>
            <div className="container-fluid bg" style={{backgroundImage:background}}>
                <div className="h-100 d-flex card LoginPage">
                <img className="card-img-top" src={microsoft} alt="Card image cap"/>
                    <form action="http://localhost:3001/api/verify" method="POST">
                        <div className="row g-3">
                            <div className="col-auto">
                                <label for="exampleFormControlInput1" className="form-label">Username</label>
                                <input type="text" className="form-control form-control-sm" id="username" style={{width:'36.5vh'}} placeholder="Enter your username"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-auto">
                                <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control form-control-sm" style={{width:'36.5vh'}} placeholder="Enter your password"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-danger btn-md mt-3" style={{maxWidth:'300px'}} >Login</button>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </>
    );
}
/*
function click(){
    fetch("http://localhost:3001/api/verify", {method:"POST", body:{username:document.getElementById("username").value, password:document.getElementById("password").value}}).then(async function(res){
        const obj = await res.json();
        if(obj.status === 200){
            Cookies.set("isLoggedIn", true);
            Cookies.set("token", obj.token);
        }
    });
}*/