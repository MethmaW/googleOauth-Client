import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";




const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj);
  console.log(response.accessToken);
};


function App() {
  return (
    <>
      <GoogleLogin
        clientId="717197083990-tf9pr22sv5sg2otukq03ve9m0sg0je61.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}

export default App;
