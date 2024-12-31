<template>
  <div class="reach-me-container" data-aos="fade-up"  data-aos-duration="3000">
    <h1>Reach Me</h1>

    <div class="reach-me-content">

      <div class="contact-left">
        <img src="https://leahbasson.github.io/MyImages/images/aboutPortImg.jpg" alt="leahContact" loading="eager"/>
        <div class="contact-icons">
          <a class="lnk text-white" href="mailto:your-email@example.com" alt="outlook icon" target="_blank"><i class="bi bi-envelope"></i></a>
          <a class="lnk text-white" href="https://www.linkedin.com/in/leah-basson-23a4192a0" alt="linkedin icon" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a class="lnk text-white" href="https://github.com/LeahBasson/leahsportfoliovue.git" target="_blank"><i class="bi bi-github"></i></a>
        </div>
        <div class="contact-info">
          <p>South Africa , Cape Town</p>
          <p><i class="bi bi-geo"></i> Address: Ottery , 7800</p>
          <p><i class="bi bi-phone"></i> Phone number: +27 66 243 1477</p>
          <p><i class="bi bi-envelope-at"></i> Email: leahbasson57@gmail.com</p>
        </div>
      </div>

      <div class="contact-right">
        <div class="contact-introduction">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out with any questions, comments, or feedback.</p>
        </div>
        <div class="forms-listing">
          <form id="contactForm" action="https://formspree.io/f/mjvqdzra" method="POST"  @submit.prevent="validateForm($event)" target="_blank">
                <div class="row mb-5">
                    <div class="col">
                        <div class="form-group">
                            <!-- Name input-->
                            <input class="form-control" id="name" type="text" name="Name" placeholder="Your Name *" v-model="name"/>
                            <label id="name_error" class="contact-label"></label>
                        </div>
                        <div class="form-group">
                            <!-- Email address input-->
                            <input class="form-control" id="email" type="email" name="Email" placeholder="Your Email *" v-model="email"/>
                            <label id="email_error" class="contact-label"></label>
                        </div>
                        <div class="form-group mb-md-0">
                            <!-- Phone number input-->
                            <input class="form-control" id="cell" type="tel" name="cell" placeholder="Your Phone *" v-model="cell"/>
                            <label id="cell_error" class="contact-label"></label>
                        </div>
                        <div class="form-group form-group-textarea mb-md-0">
                          <!-- Message input-->
                          <textarea class="form-control mb-2" id="message" name="Message" placeholder="Your Message *" v-model="message" rows="6" cols="50"></textarea>
                          <label id="message_error" class="contact-label"></label>
                      </div>
                    </div>
        
                </div>
              
                <!-- Submit Button-->
                 <div class="contact-buttons">
                  <div class="text-center"><button class="btn-contact" type="submit">Send</button></div>
                  <div class="text-center"><button class="btn-contact" type="reset">Clear</button></div>
                 </div>
      
            </form>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import AOS from "aos"; 

export default {
  name: "ReachMe",
  data() {
    return {
      name: "",
      email: "",
      cell: "",
      message: "",
    };
  },
  methods: {
    validateForm(e) {
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let cell = document.querySelector("#cell").value;
      let message = document.querySelector("#message").value;

      let valid = true;
      if (name === "") {
        document.getElementById("name_error").innerHTML = "Please enter your name";
        valid = false;
      } else {
        document.getElementById("name_error").innerHTML = "";
      }
      if (email === "") {
        document.getElementById("email_error").innerHTML = "Please enter your email address";
        valid = false;
      } else {
        document.getElementById("email_error").innerHTML = "";
      }
      if (cell === "") {
        document.getElementById("cell_error").innerHTML = "Please enter your cellphone number";
        valid = false;
      } else {
        document.getElementById("cell_error").innerHTML = "";
      }
      if (message === "") {
        document.getElementById("message_error").innerHTML = "Please enter your message";
        valid = false;
      } else {
        document.getElementById("message_error").innerHTML = "";
      }
      if (valid) {
        e.target.submit();
      }
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.cell = "";
      this.message = "";
      document.getElementById("name_error").innerHTML = "";
      document.getElementById("email_error").innerHTML = "";
      document.getElementById("cell_error").innerHTML = "";
      document.getElementById("message_error").innerHTML = "";
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style>
.reach-me-container h1 {
    color: var(--secondary);
    font-size: 3.2rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }

  .reach-me-container{
    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  .reach-me-content{
  display: flex;
  gap: 16rem;
  justify-content: center;
  margin-top: 2rem;
  }

  .contact-left{
    width: 28vw;
    font-size: 1.1rem;
  }

  .contact-right{
    width: 40vw;
    text-align: left;
    margin-top: 1rem;
  }

  img[alt='leahContact']{
    width: 19rem;
    height: auto;
    margin-bottom: 3rem;
    border-radius: 50%;
    /* border: 2px solid var(--secondary); */
    margin-top: 2rem;
    /* box-shadow: 0 0 0.8rem var(--secondary), 0 0 1rem var(--alternative); */
    box-shadow: 
        0 0 0.5rem 0.8rem var(--alternative), /* Outer glow */
        0 0 0.5rem 1.2rem var(--secondary); /* Additional layer for a wider effect */
}

.contact-icons{
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.contact-icons i{
  font-size: 1.5rem;
}

.contact-icons i:hover{
  color: var(--alternative);
}

.contact-info{
  color: var(--secondary);
  margin-top: 2rem;
}

.contact-introduction{
  color: var(--secondary);
}

.contact-introduction p{
  font-size: 1.1rem;
}

.forms-listing{
  margin-top: 3rem;
}

.contact-label{
  color: var(--secondary);
  margin-bottom: 1rem;
}

.contact-buttons{
  display: flex;
  justify-content: space-between;
  margin-top: -1.5rem;
}

.btn-contact{
  padding: 10px 32px;
  border: 1px solid var(--alternative);
  background-color: var(--primary);
  border-radius: 0.3rem;
  color: var(--secondary);
}

.btn-contact:hover{
  background-color: var(--alternative);
  transition: background-color 0.3s ease-in-out;
}

input[class=form-control]:focus, 
textarea[id=message]:focus, 
select[class=form-control]:focus{
  outline: none; /* Removes the browser's default focus outline */
  box-shadow: 0 0 1rem 0.2rem var(--alternative) !important; 
  border-color: var(--alternative); 
}

input[class=form-control],
textarea[id=message] {
   border: 2px solid var(--alternative);
}

input[class=form-control]:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #ffffff inset !important; 
}

/* Media query for 555px and less*/
@media (max-width: 555px){
  .reach-me-container h1 {
    color: var(--secondary);
    font-size: 2.8rem;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 1px #111, 2px 2px 1px var(--alternative);
  }

  .reach-me-content{
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  }

  .contact-left{
    width: 100%;
    /* background-color: burlywood; */
    font-size: 1.1rem;
  }

  .contact-right{
    width: 80%;
    /* background-color: lightcyan; */
    text-align: center;
    margin-top: 0rem;
  }

  img[alt='leahContact']{
    width: 16rem;
  }
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px) {
  .reach-me-content{
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  }

  .contact-left{
    width: 100%;
    /* background-color: burlywood; */
    font-size: 1.3rem;
  }

  .contact-right{
    width: 80%;
    /* background-color: lightcyan; */
    text-align: center;
    margin-top: 0rem;
    font-size: 1.3rem;
  }

  img[alt='leahContact']{
    width: 24rem;
  }

  .contact-introduction p{
  font-size: 1.3rem;
}
}
</style>