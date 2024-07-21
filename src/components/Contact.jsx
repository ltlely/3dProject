const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
    <p>Follow me on social media:</p>
    <ul>
      <li><a href="#">LinkedIn</a></li>
      <li><a href="#">GitHub</a></li>
    </ul>
  </section>
);

export default Contact;
