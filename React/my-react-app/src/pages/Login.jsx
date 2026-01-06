function Login() {
  return (
    <div className="col-md-4 mx-auto">
      <h3 className="text-center">Login</h3>

      <input className="form-control mb-2" type="email" placeholder="Email" />
      <input className="form-control mb-2" type="password" placeholder="Password" />

      <button className="btn btn-primary w-100">Login</button>
    </div>
  );
}

export default Login;
