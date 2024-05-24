import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../../components/utils/AuthProvider';

function Login(){

  const navigate = useNavigate();
  const [msgError,setError] = useState('');
  const {login} = useAuth();
  function handleSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target)
    const username = formData.get("username");
    const password = formData.get("password");

    const result = login(username,password);
    console.log(username,password,result);
    if(result) navigate('/protected');
    else
    setError('invalid username or password');
  }
    return (
        <> 
      
  <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input name="username" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {msgError ? (<p className="text-danger">invalid username or password</p>):''}

      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
  </main>
  </>
    )
}

export default Login;