import chandanaImage from "../assets/chandana-image.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        {/* Profile Image */}
        <img
          src={chandanaImage}
          alt="Chandana P Das"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 mx-auto shadow-lg"
        />

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6">
          Chandana P Das
        </h1>

        {/* Role */}
        <p className="text-lg md:text-2xl text-gray-400 mt-4">
          Full Stack Developer (MERN Stack)
        </p>

        

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/chandana9633"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chandana-p-das-2839222b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-500 rounded-xl hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;