import React, { Fragment } from "react";


function Login() {
  return (
    <Fragment>
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login">
                <div className="center">
                  <h1 style={{ color: "white" }}>
                    <img width={100} src="assets/img/icon.png" alt="#" />
                    FECAKARATE CONNEXION
                  </h1>
                </div>
              </div>
              <div className="login_form">
                <form>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">Addresse Email</label>
                      <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className="field">
                      <label className="label_field">Mot de passe</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                      />
                    </div>
                    <div className="field margin_0">
                      <button className="main_bt">Connexion</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
