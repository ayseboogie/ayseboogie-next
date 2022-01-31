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
              id="name"
              placeholder="Name"
              aria-label="Your name"
              required={true}
              className="w-full rounded text-base border-gray-300 p-4"
            />
          </div>
          <hr />
          <div className="my-6">
            <input
              type="email"
              name="_replyto"
              placeholder="Email"
              aria-label="Your email"
              required={true}
              className="w-full rounded text-base border-gray-300 p-4"
            />
          </div>
          <hr />
          <div className="my-6">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              aria-label="Your message"
              required={true}
              className="w-full rounded text-base border-gray-300 p-4"
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
              className="bg-gray-800 w-full h-12 rounded text-white font-semibold"
            />
          </div>
        </form>
      </main>
    </section>
  );
};

export default Contact;
