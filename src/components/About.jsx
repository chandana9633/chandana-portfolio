import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I'm a Full Stack Developer specializing in the MERN stack.
          I enjoy building scalable web applications, secure
          authentication systems, and user-friendly interfaces.
        </p>

        <p className="text-gray-300 text-lg leading-8 mt-6">
          My experience includes developing e-commerce platforms,
          task management applications, and marketplace solutions
          using React, Node.js, Express, MongoDB, and modern web
          technologies.
        </p>

        <p className="text-gray-300 text-lg leading-8 mt-6">
          Alongside development, my role as an AI & Robotics Teacher
          has strengthened my communication, leadership, and
          problem-solving skills.
        </p>
      </div>
    </section>
  );
}

export default About;