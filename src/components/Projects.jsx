const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>Better Price</h3>
      <p>HTML, Node.js, CSS, JavaScript, Bootstrap</p>
      <p>Feb 2024</p>
      <ul>
        <li>
          Significantly improved users’ ability to identify the best deals by implementing an advanced algorithm
          that calculates and compares the price per standard unit of measurement across different products and
          retailers.
        </li>
        <li>Built using HTML, Node.js, CSS, JavaScript, and Bootstrap.</li>
        <li>
          Achieved a more intuitive and user-friendly interface by designing customizable view options and
          interactive tooltips that explain deal rankings, including unit price calculations and ranking adjustments
          based on user preferences.
        </li>
      </ul>
    </div>
    <div className="project">
      <h3>Discord Bot</h3>
      <p>JavaScript, Node.js</p>
      <p>Apr 2023</p>
      <ul>
        <li>
          Leveraged the Discord API to create an interactive bot that retrieves job listings from RapidAPI to access
          the Indeed API based on user-defined parameters, such as job position and location.
        </li>
        <li>
          Enhanced user experience by implementing '!help' command to guide users on command format and structure.
        </li>
        <li>Created with JavaScript and Node.js using the Discord API.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
