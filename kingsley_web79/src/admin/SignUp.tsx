import {memo} from "react"

export default memo(function SignUp() {
  return (
        
<main className="form-signin w-100 con_signup">
  <form>
    <h1 className="h3 mb-3 fw-normal text-white text-center">Sign Up</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label text-white" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
    <p className="mt-5 mb-3 text-white text-center">&copy; 2025–Future</p>
  </form>
</main>
  )
})

