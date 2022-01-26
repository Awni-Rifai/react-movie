import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
        <div class="sign section--bg" data-bg="img/section/section.jpg">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="sign__content">
						
						<form action="#" class="sign__form">
							<a href="index.html" class="sign__logo">
								<img src="img/logo.svg" alt=""/>
							</a>

							<div class="sign__group">
								<input type="text" class="sign__input" placeholder="Email"/>
							</div>

							<div class="sign__group">
								<input type="password" class="sign__input" placeholder="Password"/>
							</div>

							<div class="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked"/>
								<label for="remember">Remember Me</label>
							</div>
							
							<button class="sign__btn" type="button">Sign in</button>

							<span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

							<span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
						</form>
						
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}
