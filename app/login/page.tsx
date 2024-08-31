import { redirect } from "next/navigation";

export default function LoginPage() {
    const login = false;
    if (login) {
        redirect('pajak')
      }
      
    return(
    <div className="container">
                <form action="" className="needs-validation">
                    <h1 className="text-center">Login Page</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="input-username">Username</span>
                        <input type="number" className="form-control" minLength={10} maxLength={10} />
                        
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="input-password">Password</span>
                        <input type="password" className="form-control" />
                    </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
    )
}