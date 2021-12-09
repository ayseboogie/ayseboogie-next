import * as React from "react";

const Contact = () => {
  return (
    <section
      className="text-sm md:text-lg lg:text-2xl px-10 md:px-48 py-8 md:py-16"
      id="contact"
    >
      <main>
        <h2 className="text-center tracking-widest pb-3 md:pb-0">Contact</h2>

        <form action="https://formspree.io/f/xpzkvoqb" method="POST">
          <div className="md:my-6">
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              aria-label="Your name"
              required={true}
              style={{
                appearance: "none",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                padding: "10px 15px",
                width: "100%",
              }}
            />
          </div>
          <hr />
          <div className="my-6">
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              aria-label="Your email"
              required={true}
              style={{
                border: "1px solid var(--mid-gray-color)",
                borderRadius: "5px",
                fontSize: "16px",
                padding: "10px 15px",
                width: "100%",
              }}
            />
          </div>
          <hr />
          <div className="my-6">
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              aria-label="Your message"
              required={true}
              style={{
                border: "1px solid var(--mid-gray-color)",
                borderRadius: "5px",
                fontSize: "16px",
                padding: "10px 15px",
                width: "100%",
              }}
            />
          </div>
          <hr />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_next"
            id="email-subject"
            value="https://ayse.site"
          />
          <div className="flex justify-center my-6">
            <input
              type="submit"
              value="Send"
              style={{
                border: "none",
                height: "50px",
                width: "100%",
                borderRadius: "0.3em",
                fontWeight: "600",
                /* Colors */
                color: "white",
                background: "#212121",
                /* To get the hover animation to work */
                transition: "transform .5s",
              }}
            />
          </div>
        </form>
      </main>
    </section>
  );
};

export default Contact;
