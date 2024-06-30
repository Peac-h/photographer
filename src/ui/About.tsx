export const About = () => {
  return (
    <div className="flex max-w-xs flex-col gap-6 p-4 sm:max-w-sm md:max-w-lg">
      <p>
        Hello there! I'm <span className="text-stone-500">Tamta</span>, a
        front-end developer at{" "}
        <a href="https://www.videowindow.eu/" className="link">
          Videowindow
        </a>
        . This website serves as a showcase of my home country Georgia,
        highlighting its rich historical background, main aspects of its culture
        and spirit. I hail from Tbilisi, where I was born, raised, and continue
        to reside, although I frequently travel.
      </p>
      <p>
        Georgia, positioned at the crossroads of Eastern Europe and Western
        Asia, is renowned for its centuries-old history, vibrant culture, and
        breathtaking landscapes. Despite our deep historical roots, Georgians
        have continuously fought for freedom and independence, and still do.
      </p>
      <p>
        This website is developed using Tailwind CSS for styling, TypeScript for
        scripting, React as the front-end framework, and Vite as the build tool.
        If you’re curious about my other projects, hit my{" "}
        <a href="https://peachfolio.online/" className="link" target="_blank">
          Portfolio
        </a>
        . If you’d like to, do not hesitate to drop a word about your thoughts
        at my{" "}
        <a href="mailto:p6eac.h@gmail.com" className="link">
          Email
        </a>
        . I’m always glad to chat and open to criticism, by the way.
      </p>
    </div>
  );
};
