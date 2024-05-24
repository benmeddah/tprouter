function Register(){
    return (
        <> 
      
  <main className="form-signin w-100 m-auto">
    <form>
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
    
      <div className="form-floating">
        <input type="text" className="form-control" id="fname" placeholder="First Name" />
        <label htmlFor="fname">First Name</label>
      </div>  
      <div className="form-floating">
        <input type="text" className="form-control" id="lname" placeholder="Last Name" />
        <label htmlFor="lname">Last Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
  </main>
  </>
    )
}

export default Register;