function Signup() {
  return (
    <div className="col-md-4 mx-auto">
      <h3 className="text-center">Signup</h3>

      <input className="form-control mb-2" type="text" placeholder="Name" />
      <input className="form-control mb-2" type="email" placeholder="Email" />
      <input className="form-control mb-2" type="password" placeholder="Password" />

      <button className="btn btn-success w-100">Signup</button>
    </div>
  );
}

export default Signup;
