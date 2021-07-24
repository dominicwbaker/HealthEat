import React, { useState } from "react";
import Container from "../../Components/Container";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
//dont forget to install locally!
import { GoogleLogin } from "react-google-login";
import { Button } from "bootstrap";
function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };
  const googleSuccess = (res) => {
    console.log(res);
    let googleUser = {
      "name": res.profileObj.name,
      "email": res.profileObj.email
    }
    return fetch('http://localhost:3000/api/user', {
      method: "POST",
      body: JSON.stringify(googleUser),
      headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}
  const googleFailure = () => {
    console.log("Google Sign In Failed")
  }
  return (
    <div>
      <div className="mt-4">
        <h2>Welcome to Wikipedia Searcher!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
          <div>
          <GoogleLogin 
            clientId="104281838998-pb1k12nvoc7m7bn98ad0o5cofacbn46p.apps.googleusercontent.com"
            /* onSuccess={googleSuccess} */
            onFailure={googleFailure}
          />
          </div>
        </Container>
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
