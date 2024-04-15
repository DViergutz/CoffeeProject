import Navigation from "./Navbar";

function LoginAdmin() {
  return (
    <>
      <Navigation />
      <div className="bg-fondo3 p-5 ">
        <div className="container login-wrapper">
          <div className="row bg-dark-grey border-orange mt-5 ">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={`${
                    import.meta.env.VITE_BUCKETS_URL
                  }/fotos_varias/logo-utica-white.png`}
                  alt="UticaLogo"
                  className="utica-logo-login"
                />
              </div>
            </div>
            <div className="col-md-6 bg-light p-5 rounded-end">
              <h3 className="text-dark mb-3 fw-semibold">Login</h3>
              <form>
                <div className="mb-2">
                  <label forhtml="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="email"
                    name="email"
                  />
                  <small className="text-secondary">Try: test@test.com</small>
                </div>

                <div className="mb-2">
                  <label
                    forhtml="username"
                    className="form-label text-dark mt-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                  />
                  <small className="text-secondary">Try: 123</small>
                </div>

                <button
                  type="submit"
                  className="btn btn-subscribe w-100 my-3 text-light"
                >
                  Login
                </button>
                <div className="d-flex"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
