import React from "react";
const Header = () => {
	return (
		<>
			<section>
				<nav>
					<div className="navDiv">
						<div className="logo">
							<img src="https://zyan.vercel.app/images/logo.png" alt="" />
						</div>
						<div className="NavList">
							<ul>
								<li col-lg-4>
									<a href="#">ABOUT US</a>
								</li>
								<li col-lg-4>
									<a href="#">SERVICES</a>
								</li>
								<li col-lg-4>
									<a href="#">PROJECTS</a>
								</li>
								<li col-lg-4>
									<a href="#">BLOG</a>
								</li>
								<li col-lg-4>
									<a href="#">HOME</a>
								</li>
								<li col-lg-4>
									<a href="#">CONTACT</a>
								</li>
							</ul>
						</div>
						<div className="NavMenu">
							<span>
								<button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
									<i class="fa-solid fa-bars"></i>
								</button>
								<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
									<div class="offcanvas-header">
										<h5 id="offcanvasRightLabel">
											<img src="https://zyan.vercel.app/images/logo.png" alt="" />
										</h5>
										<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
									</div>
									<div class="offcanvas-body">
										<div className="content-box">
											<h5>ABOUT US</h5>
											<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
										</div>
										<div className="offcanvas_contact_form">
											<h5>GET IN TOUCH</h5>
											<form>
												<input type="text" placeholder="Your Name" />
												<input type="text" placeholder="Your Email" />
												<textarea name="Message" id="textarea" cols="30" rows="10" placeholder="Message"></textarea>
												<button type="button" className="common-btn">
													Submit Now
												</button>
											</form>
										</div>
									</div>
								</div>{" "}
							</span>
						</div>
					</div>
				</nav>
			</section>
			
		</>
	);
};

export default Header;
