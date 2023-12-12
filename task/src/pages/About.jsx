import React from "react";

const About = () => {
  return (
    <div className="container">
      {/* div1 */}
      <div className="container row py-5">
        <h2 className="fs-1 text-center">About Us</h2>
        <p className="text-center">
          Discover our mission, values, and team, and learn about our <br></br>{" "}
          commitment to providing reliable and credible news
        </p>
      </div>


      {/* div2 */}
      <div className="row gy-5 d-flex align-items-center justify-content-center py-5">
        <div className="col-sm py-5">
          <h2 className="fs-1" >Journalism with Integrity</h2>
          <p>
            Our journalism is guided by unwavering integrity, upholding the
            highest standards of accuracy, impartiality, and fairness.
            <br></br> We prioritize accuracy, impartiality, and transparency in
            our reporting, ensuring that our readers receive reliable and
            trustworthy news.
            <br></br> We strive to provide reliable news that our readers can
            trust, making sure that our reporting is based on facts and thorough
            research, and free from bias or sensationalism.
          </p>
        </div>

        <div className="col-sm">
          <img src={"https://assets.website-files.com/643450fc0531386613b2149b/646b32b4c10f2a9ee86e7708_about-img-1-p-1080.jpg"} alt="pic1" className="img-fluid" />
        </div>
      </div>

      {/* div3 */}

      <div className="row gy-5 py-5">
        <div className="col-sm">
          <h2 className="fs-1">Who We Are</h2>
        </div>

        <div className="col-sm">
          <h4>Our Mission</h4>
          <p>
            Our mission is to deliver news that matters, to provide our readers
            with timely, accurate, and comprehensive coverage of the latest
            events and developments. We strive to inform, inspire, and engage
            our audience with quality journalism that upholds the principles of
            accuracy, fairness, and integrity.
          </p>
        </div>

        <div className="col-sm">
          <h4>Our Vision</h4>
          <p>
            Our vision is to be a leading force in journalism, shaping the
            future of news by delivering innovative and compelling content that
            resonates with our readers. We aspire to be a trusted source of
            information, inspiring positive change through our reporting.
          </p>
        </div>
      </div>


      <div className="container row gy-5 d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <img src={"https://assets.website-files.com/643450fc0531386613b2149b/646b32b4a0f30ca24458c384_about-img-2-p-1080.jpg"} className="img-fluid" />
        </div>

        <div className="col-sm">
          <h2 className="fs-1">From Humble Beginnings</h2>
          <p>
            Our story started with a passion for news and a commitment to
            delivering accurate and reliable information to our readers. Over
            the years, we have grown from humble beginnings into a trusted
            source of news, constantly evolving and adapting to the changing
            media landscape.
          </p>

          <h4>Achievements</h4>
          <p>Accomplishments that speak for themselves.</p>

          <h4>Evolution</h4>
          <p>Transforming News Landscape Through Evolution.</p>
        </div>
      </div>

      {/* div4 */}


      <div className="container py-5">
        <h2 className="fs-1 py-5">Our Authors</h2>
       
        <div className="row gy-5">
          {/* person1 */}
          <div className="col-sm">
            <div className="card">
              <img src={"https://assets.website-files.com/6457af175d2f1133b79ecaa8/645dd1447027d8b7406caf28_authors-thumb-02-p-800.jpg"} className="card-img-top" alt="auth1" />
              <div className="card-body">
                <p className="card-text">
                  <h4>Devon Lane</h4>
                  <p>@devon_06</p>
                </p>
              </div>
            </div>
          </div>

          {/* person2 */}

          <div className="col-sm">
            <div className="card">
              <img src={"https://assets.website-files.com/6457af175d2f1133b79ecaa8/645dd139ed7bc34887eb18ac_authors-thumb-04-p-800.jpg"} className="card-img-top" alt="aut2" />
              <div className="card-body">
                <p className="card-text">
                  <h4>Jane Cooper</h4>
                  <p>@jane_tech</p>
                </p>
              </div>
            </div>
          </div>

          {/* person3 */}

          <div className="col-sm">
            <div className="card">
              <img src={"https://assets.website-files.com/6457af175d2f1133b79ecaa8/645dd131d70f00fded72ecc4_authors-thumb-06-p-800.jpg"} className="card-img-top" alt="auth3" />
              <div className="card-body">
                <p className="card-text">
                  <h4>Kristin Watson</h4>
                  <p>@kristin_15</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Input */}


      <h2 className="fs-1 py-5">Contact us for any questions</h2>

     

      <div className="container row d-flex flex-column flex-md-row align-items-center justify-content-center ">

        <div className="col">
              <img src={"https://st4.depositphotos.com/13193658/28577/i/600/depositphotos_285777864-stock-photo-selective-focus-happy-businessman-headset.jpg"} className="img-fluid"/>
        </div>

        <div className="col py-5">
        <form>
          <div class="mb-3">

            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Username</label>
            <input type="text" class="form-control" id="exampleInputPassword1"></input>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>

          <button type="submit" class="btn btn-outline-primary">Send message</button>

          
        </form>
        </div>

        


      </div>

      {/* Faq */}



      <h2 className="fs-1 py-5">FAQ</h2>



      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How can I stay updated on the latest news and events?{" "}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  Sodales turpis sollicitudin nunc, tristique in euismod sed
                  dolor scelerisque. Scelerisque sagittis sollicitudin duis
                  feugiat suspendisse. Cum cursus viverra pellentesque elit.
                  Posuere scelerisque at orci, id pretium, iaculis tristique
                  quam faucibus. Mattis sapien, id amet donec facilisis
                  penatibus massa.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Can I share news articles from this platform on social media?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  Sodales turpis sollicitudin nunc, tristique in euismod sed
                  dolor scelerisque. Scelerisque sagittis sollicitudin duis
                  feugiat suspendisse. Cum cursus viverra pellentesque elit.
                  Posuere scelerisque at orci, id pretium, iaculis tristique
                  quam faucibus. Mattis sapien, id amet donec facilisis
                  penatibus massa.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Is the news content fact-checked for accuracy?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  Sodales turpis sollicitudin nunc, tristique in euismod sed
                  dolor scelerisque. Scelerisque sagittis sollicitudin duis
                  feugiat suspendisse. Cum cursus viverra pellentesque elit.
                  Posuere scelerisque at orci, id pretium, iaculis tristique
                  quam faucibus. Mattis sapien, id amet donec facilisis
                  penatibus massa.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Are there any subscription fees or charges for accessing the
                  news?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  Sodales turpis sollicitudin nunc, tristique in euismod sed
                  dolor scelerisque. Scelerisque sagittis sollicitudin duis
                  feugiat suspendisse. Cum cursus viverra pellentesque elit.
                  Posuere scelerisque at orci, id pretium, iaculis tristique
                  quam faucibus. Mattis sapien, id amet donec facilisis
                  penatibus massa.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Is there a rating or feedback system for news articles?{" "}
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {" "}
                  Sodales turpis sollicitudin nunc, tristique in euismod sed
                  dolor scelerisque. Scelerisque sagittis sollicitudin duis
                  feugiat suspendisse. Cum cursus viverra pellentesque elit.
                  Posuere scelerisque at orci, id pretium, iaculis tristique
                  quam faucibus. Mattis sapien, id amet donec facilisis
                  penatibus massa.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* faq image */}
        <div className="col-sm py-5">
          <img src={"https://assets.website-files.com/643450fc0531386613b2149b/646744ac2d6c9e790cd1388d_faq-img.jpg"} alt="pic2" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;
