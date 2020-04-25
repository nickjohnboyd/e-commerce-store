import React from 'react';

class LoginPage extends React.Component {
	render() {
		return(
			<div className="LoginPage">
				<div className="login">
					<div className="login-title">Login</div>
					<div className="email">
						<div className="email-title">Email</div>
						<div className="ui input">
							<input type="email" className="email-input"></input>
						</div>
					</div>
					<div className="password">
						<div className="pass-bar">
							<div className="pass-title">Password</div>
							{/* <a className="forgot-pass" href="">Forgot password?</a> */}
						</div>
						<div className="ui input">
							<input type="password" className="pass-input"></input>
						</div>
					</div>
					<button className="ui button sign-in-btn">Sign in</button>
				</div>
			</div>
		);
	}
};

export default LoginPage;