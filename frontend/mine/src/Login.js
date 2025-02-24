import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <div className="card text-center">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  Or <p>Dont have an account? <a href="/signin">Sign in here</a></p>
    OR <button>Sign in with Google</button>
  </form>
    </div>
    </>
  )
}
// Current IP Address (111.125.237.195/32)
//POV: the IP addresses in mongodb atlas keeps changing
export default Login