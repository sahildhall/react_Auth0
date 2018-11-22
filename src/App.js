import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Auth0 from 'auth0-js';

var AOUT0_CONSTANTS = {
  /*
  "AUDIENCE":"https://api.chameleon.com",
  "MANAGEMENT_AUDIENCE":"https://sahildhall.auth0.com/api/v2/",
  "AUTH0_DOMAIN":"sahildhall.auth0.com",
  "CLIENT_ID":"lMG6edppBdZutfJCkFr6e8VW3whbJy10",
  "CLIENT_SECRET":"pdlK03jo-VqLPbvPj27ie4FJCu71Oj6QYWZ0wjrP2fhE6zKj0FJONvTxMf0HMJWs",
  "AUTH_TOKEN_URL": "https://chameleonapp.auth0.com/oauth/token",
  */
  AUTH0_URL: '127.0.0.1:3000/callback',
  // AUTH0_DOMAIN: 'sahildhall.auth0.com',
  AUTH0_DOMAIN: 'chameleonapp.auth0.com',
  // AUTH0_CLIENT_ID: '7hlOFx95ayVtnfuvhMrT6CGyTXUjc7pO',
  // AUTH0_CLIENT_ID: 'lMG6edppBdZutfJCkFr6e8VW3whbJy10',
  AUTH0_CLIENT_ID: 'KaBy51M50fiAeQcYXMUvWOMET217vHSB',
  AUTH0_ACCESS_TOKEN: 'ACCESS_TOKEN',
  AUTH0_SCOPE: 'openid profile',
  // AUTH0_AUDIENCE: 'https://chameleonapp.auth0.com/api/v2/',
  AUTH0_AUDIENCE: 'https://api.chameleon_react.com',
  // AUTH0_AUDIENCE: 'https://chameleon.com',
  CLIENT_SCRET: 'JsF9_SpE175gsxBuW4zQZHf5UNteVlM8e3-CMZ-Fs-f-3VAiEAmG_W4K7Nf1Ary_',
  // CLIENT_SCRET: 'pdlK03jo-VqLPbvPj27ie4FJCu71Oj6QYWZ0wjrP2fhE6zKj0FJONvTxMf0HMJWs',
  // AUTH0_AUDIENCE: 'https://sahildhall.auth0.com/api/v2/',
  // AUTH0_SCOPE: 'read:client_grants create:client_grants delete:client_grants update:client_grants read:users update:users delete:users create:users read:users_app_metadata update:users_app_metadata delete:users_app_metadata create:users_app_metadata create:user_tickets read:clients update:clients delete:clients create:clients read:client_keys update:client_keys delete:client_keys create:client_keys read:connections update:connections delete:connections create:connections read:resource_servers update:resource_servers delete:resource_servers create:resource_servers read:device_credentials update:device_credentials delete:device_credentials create:device_credentials read:rules update:rules delete:rules create:rules read:rules_configs update:rules_configs delete:rules_configs read:email_provider update:email_provider delete:email_provider create:email_provider blacklist:tokens read:stats read:tenant_settings update:tenant_settings read:logs read:shields create:shields delete:shields update:triggers read:triggers read:grants delete:grants read:guardian_factors update:guardian_factors read:guardian_enrollments delete:guardian_enrollments create:guardian_enrollment_tickets read:user_idp_tokens create:passwords_checking_job delete:passwords_checking_job read:custom_domains delete:custom_domains create:custom_domains read:email_templates create:email_templates update:email_templates',
};


class App extends Component {
  
  componentDidMount() {
    
    let auth0 = new Auth0.WebAuth({
      domain: AOUT0_CONSTANTS.AUTH0_DOMAIN,
      clientID: AOUT0_CONSTANTS.AUTH0_CLIENT_ID,
      redirectUri: 'http://127.0.0.1:4000/',//'com.auth0://sahildhall.auth0.com/android/com.auth0/callback',
      audience: AOUT0_CONSTANTS.AUTH0_AUDIENCE,
      responseType: 'token id_token',
      client_secret: AOUT0_CONSTANTS.CLIENT_SCRET,
      grant_type: "client_credentials",
      scope: AOUT0_CONSTANTS.AUTH0_SCOPE
    });
    auth0.authorize();
  
    /*auth0
      .webAuth
      .authorize({ scope: AOUT0_CONSTANTS.AUTH0_SCOPE,
        audience: AOUT0_CONSTANTS.AUTH0_AUDIENCE })
      .then(credentials => {
//!**********************************************************************
        let tokenValidityTimeStamp = Date.now() + (credentials.expiresIn * 1000) - 300000 // 5 min offset for those API that are in transit 5 min is because of some long uploading task is there
//Test code with duration of 30 sec
//tokenValidityTimeStamp = Date.now() + 30000 //offset for those API that are in transit 30 min is because of some long uploading task is there
        let authOObj = Object.assign(credentials, {tokenValidityTimeStamp: tokenValidityTimeStamp})
        AsyncStorage.setItem(CONSTANTS.APP_PERSISTENCE_KEYS.AUTH0_TOKEN, JSON.stringify(authOObj));
//!**********************************************************************
        AuthManager.registerUser(callback, credentials.accessToken);
      }).catch(data => {
      console.log('========================',data)
      BackAndroid.exitApp();
      callback({ error: data });
    });*/
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
