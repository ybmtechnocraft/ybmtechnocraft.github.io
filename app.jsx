const { BrowserRouter, Routes, Route, Link, useLocation } = ReactRouterDOM;

function HeaderSection() {
  // Cube animation removed for simplicity
  return (
    <div className="hero-header">
      <div>YBM Techno Craft<br/>One Stop Solution for all your plastic needs</div>
      <div className="hero-header-line"></div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="header_section header_bg">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo"><Link to="/"><img src="images/logo.jpg" /></Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tool-room-pages">Tools</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/moulds">Moulds</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/production">Production</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">About Financial</h4>
            <div className="location_text"><img src="images/map-icon.png"><span className="padding_left_15">Locations</span></img></div>
            <div className="location_text"><img src="images/call-icon.png"><span className="padding_left_15">+01 9876543210</span></img></div>
            <div className="location_text"><img src="images/mail-icon.png"><span className="padding_left_15">demo@gmail.com</span></img></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">About Financial</h4>
            <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Instagram</h4>
            <div className="footer_images">
              <div className="footer_images_left">
                <div className="image_12"><img src="images/img-12.png"></img></div>
                <div className="image_12"><img src="images/img-12.png"></img></div>
                <div className="image_12"><img src="images/img-12.png"></img></div>
              </div>
              <div className="footer_images_right">
                <div className="image_12"><img src="images/img-12.png"></img></div>
                <div className="image_12"><img src="images/img-12.png"></img></div>
                <div className="image_12"><img src="images/img-12.png"></img></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Newsletter</h4>
            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
            <div className="footer_social_icon">
              <ul>
                <li><a href="#"><img src="images/fb-icon1.png"></img></a></li>
                 <li><a href="#"><img src="images/twitter-icon1.png"></img></a></li>
                <li><a href="#"><img src="images/linkedin-icon1.png"></img></a></li>
                <li><a href="#"><img src="images/youtub-icon1.png"></img></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_section">
          <div className="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html  Templates</a></div>
        </div>
      </div>
    </div>
  );
}
function Home() {
  return (
    <>
    <div className="services_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">Welcome to YBM Techno Craft</h1>
            <p className="services_text">At YBM Techno Craft, we take pride in being a leading name in plastic and plastic mold manufacturing. Founded in 2008 by Mr. Malappa, a highly skilled mold design engineer with over 27 years of extensive experience in the design and manufacturing of molds, our company has built a reputation for excellence both in India and internationally.</p>
            <h2 className="services_taital">Why Choose YBM Techno Craft?</h2>
            <ul>
                <li><strong>Expertise and Experience:</strong> Our founder's deep knowledge and global exposure ensure cutting-edge solutions tailored to your needs.</li>
                <li><strong>State-of-the-Art Technology:</strong> We leverage advanced machinery and innovative techniques to deliver precision and quality in every product.</li>
                <li><strong>Comprehensive Solutions:</strong> From mold design to manufacturing and delivery, we provide end-to-end services for all your plastic molding requirements.</li>
                <li><strong>Commitment to Quality:</strong> We adhere to the highest quality standards to ensure durability, efficiency, and performance in every product we create.</li>
                <li><strong>Global Reach:</strong> Our projects span across industries and geographies, proving our ability to meet diverse and complex demands.</li>
            </ul>
            <p className="services_text">
                At YBM Techno Craft, we combine technical expertise with a commitment to innovation, ensuring that every product we
                deliver meets the highest standards of excellence. We value our clients and strive to build lasting relationships
                through unparalleled service and quality.
            </p>
          </div>
          <div className="col-md-4">
            <div><img src="images/img-1.png" className="image_1" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital">WHAT WE DO</h1>
        <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="what_we_do_section_2">
          <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/InjectionMoulding.webp" /></div>
              <h3 className="accounting_text">Injection <br /> Moulding</h3>
              <ul className="lorem_text">
                  <li>Multi Cavity Injection-Mould</li>
                  <li>Multi Color / Dual Injection-Mould</li>
                  <li>Over Mould</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/CompressionMoulding.webp" /></div>
              <h3 className="accounting_text">Compression and Specialized Moulds</h3>
              <ul className="lorem_text">
                <li>Compression-Mould</li>
                <li>Stack Mould</li>
                <li>Auto Unscrewing-Mould</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/CastingMould.webp" /></div>
              <h3 className="accounting_text">Casting and Blow Moulding</h3>
              <ul className="lorem_text">
                <li>Die Cast-Mould</li>
                <li>Extrusion Blow-Mould</li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/LSRMoulding.webp" /></div>
              <h3 className="accounting_text">LSR (Liquid Silicone Rubber) Moulding</h3>
              <ul className="lorem_text">
                <li>First Time In India” to Develop Liquid silicon mold (LSR)</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="project_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="project_main">
              <h1 className="services_taital">Our projects</h1>
              <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
              <div className="moremore_bt"><a href="#">Read More </a></div>
              <div className="image_6"><img src="images/img-6.png" /></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="images_main">
              <div className="images_left">
                <div className="container_1">
                  <img src="images/img-2.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                  <div className="middle">
                    <div className="text"><img src="images/search-icon.png" /></div>
                    <h2 className="fact_text">Established Fact</h2>
                  </div>
                </div>
                <div className="container_1">
                  <img src="images/img-3.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                  <div className="middle">
                    <div className="text"><img src="images/search-icon.png" /></div>
                    <h2 className="fact_text">Established Fact</h2>
                  </div>
                </div>
              </div>
              <div className="images_right">
                <div className="container_1">
                  <img src="images/img-4.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                  <div className="middle">
                    <div className="text"><img src="images/search-icon.png" /></div>
                    <h2 className="fact_text">Established Fact</h2>
                  </div>
                </div>
                <div className="container_1">
                  <img src="images/img-5.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                  <div className="middle">
                    <div className="text"><img src="images/search-icon.png" /></div>
                    <h2 className="fact_text">Established Fact</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project_section_2 layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src="images/icon-3.png" /></div>
            <h3 className="accounting_text_1">16+</h3>
            <p className="yers_text">Years of Business</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src="images/icon-4.png" /></div>
            <h3 className="accounting_text_1">55+</h3>
            <p className="yers_text">Projects Delivered</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src="images/icon-2.png" /></div>
            <h3 className="accounting_text_1">300+</h3>
            <p className="yers_text">Satisfied Customers</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src="images/icon-1.png" /></div>
            <h3 className="accounting_text_1">10+</h3>
            <p className="yers_text">Services</p>
          </div>
        </div>
      </div>
    </div>
    <div className="team_section layout_padding">
      <div className="container">
        <h1 className="what_taital">Our Team and experts</h1>
        <p className="what_text_1">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="team_section_2 layout_padding">
          <div className="row">
            <div className="col-sm-3">
              <img src="images/img-7.png" className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-8.png" className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-9.png" className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-10.png" className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="client_section layout_padding">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1" /></li>
                  <li><img src="images/img-11.png" className="image_11" /></li>
                  <li><img src="images/round-2.png" className="round_2" /></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
            <div className="carousel-item">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1" /></li>
                  <li><img src="images/img-11.png" className="image_11" /></li>
                  <li><img src="images/round-2.png" className="round_2" /></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
            <div className="carousel-item">
              <h1 className="what_taital">what is syas our clients</h1>
              <div className="client_section_2 layout_padding">
                <ul>
                  <li><img src="images/round-1.png" className="round_1" /></li>
                  <li><img src="images/img-11.png" className="image_11" /></li>
                  <li><img src="images/round-2.png" className="round_2" /></li>
                </ul>
                <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
function About() {
  return (
    <>
    <div className="services_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">WELCOME TO FINAnCIAL SERVICES</h1>
            <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
            <div className="moremore_bt"><a href="#">Read More </a></div>
          </div>
          <div className="col-md-4">
            <div><img src="images/img-1.png" className="image_1" /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
function Services() {
  return (
    <>
    <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital">WHAT WE DO</h1>
        <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="what_we_do_section_2">
          <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-1.png" /></div>
              <h3 className="accounting_text">Accounting</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main active">
              <div className="icon_1"><img src="images/icon-2.png" /></div>
              <h3 className="accounting_text">Advisor</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-3.png" /></div>
              <h3 className="accounting_text">Investment</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src="images/icon-4.png" /></div>
              <h3 className="accounting_text">Financial</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
function Team() {
  return (
    <>
    <div className="team_section layout_padding">
      <div className="container">
        <h1 className="what_taital">Our Team and experts</h1>
        <p className="what_text_1">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="team_section_2 layout_padding">
          <div className="row">
            <div className="col-sm-3">
              <img src="images/img-7.png" className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-8.png" className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-9.png" className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="images/img-10.png" className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                  <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                  <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
function Contact() {
  return (
    <>
    <div className="contact_section layout_padding">
      <div className="container-fluid">
        <h1 className="what_taital">Contact us</h1>
        <p className="amet_text">amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        <div className="contact_section2">
          <div className="row">
            <div className="col-md-6 padding_left_0">
              <div className="mail_section">
                <input type="" className="mail_text_1" placeholder="Name" name="Name" />
                <input type="" className="mail_text_1" placeholder="Phone Number" name="Phone Number" />
                <input type="" className="mail_text_1" placeholder="Email" name="Email" />
                <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                <div className="send_bt"><a href="#">send</a></div>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.1309436983884!2d77.70038459999999!3d12.770007199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f0024ff58af%3A0xd36ca4165ecc7dd0!2sYBM%20technocraft!5e0!3m2!1sen!2sin!4v1737298432147!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
function ToolRoom() {
  return (
    <>
  <div className="css-slider-wrapper">
    <input type="radio" name="slider" className="slide-radio1" defaultChecked id="slider_1" />
    <input type="radio" name="slider" className="slide-radio2" id="slider_2" />
    <input type="radio" name="slider" className="slide-radio3" id="slider_3" />
    <input type="radio" name="slider" className="slide-radio4" id="slider_4" />
   
    <div className="slider-pagination">
      <label htmlFor="slider_1" className="page1"></label>
      <label htmlFor="slider_2" className="page2"></label>
      <label htmlFor="slider_3" className="page3"></label>
      <label htmlFor="slider_4" className="page4"></label>
    </div>
   
    <div className="slider slide-1">
      <img src="images/cnc-milling.png" alt="" />
      <div className="slider-content">
        <h4>New Product</h4>
        <h2>Denim Longline T-Shirt Dress With Split</h2>
        <button type="button" className="buy-now-btn">$130</button>
      </div>
      <div className="number-pagination">
        <span>1</span>
      </div>
    </div>
   
    <div className="slider slide-2">
      <img src="images/model-2.png" alt="" />
      <div className="slider-content">
        <h4>New Product</h4>
        <h2>Denim Longline T-Shirt Dress With Split</h2>
        <button type="button" className="buy-now-btn">$130</button>
      </div>
      <div className="number-pagination">
        <span>2</span>
      </div>
    </div>
   
    <div className="slider slide-3">
      <img src="images/model-3.png" alt="" />
      <div className="slider-content">
        <h4>New Product</h4>
        <h2>Denim Longline T-Shirt Dress With Split</h2>
        <button type="button" className="buy-now-btn">$130</button>
      </div>
      <div className="number-pagination">
        <span>3</span>
      </div>
    </div>
   
    <div className="slider slide-4">
      <img src="images/model-4.png" alt="" />
      <div className="slider-content">
        <h4>New Product</h4>
        <h2>Denim Longline T-Shirt Dress With Split</h2>
        <button type="button" className="buy-now-btn">$130</button>
      </div>
      <div className="number-pagination">
        <span>4</span>
      </div>
    </div>
  </div>
  </>
  );
}

function ToolRoomPages() {
  const tools = [
    { src: "images/Tools/CNC Milling YMC 15 VMC 1020.png", title: "CNC Milling - YCM I5 VMC 1020" },
    { src: "images/Tools/EDM Machine OSCARMAX.png", title: "EDM Machine - OSCARMAX" },
    { src: "images/Tools/RPT Machine.png", title: "RPT Machine" },
    { src: "images/Tools/Shibaura machine injection moulding.png", title: "Injection Moulding - SHIBAURA 180 Tons" },
    { src: "images/Tools/Radial drilling.png", title: "Radial Drilling" },
    { src: "images/Tools/Liquid silicon mold.png", title: "Liquid Silicon Mould" },
    { src: "images/Tools/Surface grinding.png", title: "Surface Grinding" },
    { src: "images/Tools/Lathe.png", title: "Lathe" }
  ];
  return (
    <div className="layout_padding">
      <div className="container">
        <h1 className="services_taital">Tool Room Pages</h1>
        <div className="row">
          {tools.map(tool => (
            <div key={tool.title} className="col-md-3 col-sm-6 mb-4 text-center">
              <img src={tool.src} alt={tool.title} className="img-fluid" />
              <h5 className="mt-2">{tool.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Moulds() {
  const moulds = [
    { title: 'Stack Mould', image: 'images/Stack mould/Stack mould 1.png', text: 'Stack moulds are an advanced form of multi-level injection moulding technology that significantly increases production efficiency.' },
    { title: 'Bi Material Mould', image: 'images/Bi material mould/Bi material mould 1.png', text: 'The Bi-Material mould enables the integration of two distinct materials within a single injection moulding process.' },
    { title: 'Bi Color Mould', image: 'images/Bi colour mould/Bi colour mould 1.png', text: 'Bi-Color moulds facilitate the injection of two different colors into a single component.' },
    { title: 'LSR Mould', image: 'images/Tools/Liquid silicon mold.png', text: 'Liquid Silicone Rubber moulding represents a breakthrough in high-precision moulding technology.' },
    { title: 'Collapsible Core - 18', image: 'images/Tools/Radial drilling.png', text: 'Collapsible core moulds are an advanced solution for manufacturing complex hollow parts with undercuts.' },
    { title: 'Unscrewing Moulds', image: 'images/Tools/CNC Milling YMC 15 VMC 1020.png', text: 'Unscrewing moulds are specially designed for the production of threaded plastic parts that require automatic unscrewing.' }
  ];
  return (
    <div className="layout_padding">
      <div className="container">
        <h1 className="services_taital">Moulds</h1>
        {moulds.map((m, idx) => (
          <div key={idx} className="row text-left align-items-center mb-5">
            <div className="col-md-6">
              <h2 className="services_taital">{m.title}</h2>
              <p className="services_text">{m.text}</p>
            </div>
            <div className="col-md-6">
              <img src={m.image} alt={m.title} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactfulProducts() {
  return (
    <div className="layout_padding">
      <div className="container">
        <h1 className="services_taital">Impactful Products</h1>
        <div className="row text-left align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="services_taital">Automotive Industry</h2>
            <h3>Mirror Cavity Housing Mould</h3>
            <p className="services_text">Developed a 1+1 cavity mirror housing with a floating core and bump-off ejection.</p>
          </div>
          <div className="col-md-6">
            <img src="images/Mirror cavity mould/Mirror cavity mould 1.png" alt="Mirror" className="img-fluid" />
          </div>
        </div>
        <div className="row text-left align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img src="images/Health care/Health care 1.png" alt="Health" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="services_taital">Health Care Industry</h2>
            <p className="services_text">Products designed for life sciences and biomedical applications.</p>
          </div>
        </div>
        <div className="row text-left align-items-center">
          <div className="col-md-6">
            <h2 className="services_taital">Electrical Moulds</h2>
            <p className="services_text">Muse Smart Ring charging case mould showcasing our precision.</p>
          </div>
          <div className="col-md-6">
            <img src="images/Electrical item/Electrical item 1.png" alt="Electrical" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Production() {
  return (
    <div className="layout_padding">
      <div className="container">
        <h1 className="services_taital">Production</h1>
        <p className="services_text">Moulding - General Information</p>
      </div>
    </div>
  );
}
function AppContent() {
  const location = useLocation();
  React.useEffect(() => {
    console.log('Navigated to', location.pathname);
  }, [location]);

  React.useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <>
      <Navbar />
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tool-room-pages" element={<ToolRoomPages />} />
        <Route path="/moulds" element={<Moulds />} />
        <Route path="/products" element={<ImpactfulProducts />} />
        <Route path="/production" element={<Production />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
