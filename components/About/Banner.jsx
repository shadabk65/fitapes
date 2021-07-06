import React from 'react';

export default function Banner() {
  return (
    <React.Fragment>
    <section class="about_banner main">
      <div class="container-fluid text-center">
          <h1>Making Health Universal, <br/>Instant &amp; Promising!</h1>
          <p>Irrespective of the presence, we unlock access to licensed <br/> healthcare professionals</p>
          <a href="#" class="btn_base btn_blue">Who we are</a>
          {/* <span class="material-icons">expand_more</span> */}
      </div>
      <img src="/images/25.png" id="leftImg" alt="image"/>
      <img src="/images/15.png" id="rightImg" alt="image"/>
    </section>
    </React.Fragment>
  )
}
