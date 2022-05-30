function LoginAuth() {

  return (
      <div className="container-fluid full-bg">
        <div className="input_text">
            <form>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" id="PasswordInput" />
                <div className="input-group-append">
                  <button className="btn btn-sub"  type="button" id="btnClick" onclick="validation()"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
              <span id="text-error"></span>
            </form>
        </div>
    </div>
  );
}

export default LoginAuth;
