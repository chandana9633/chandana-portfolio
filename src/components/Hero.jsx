import chandanaImage from "../assets/chandana-image.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
      <section className="min-h-[90vh] lg:min-h-screen flex items-center px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500 text-purple-400 text-sm mb-6">
              🚀 Open to Opportunities
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Chandana
              </span>
            </h1>

            {/* Animated Role */}
            <div className="mt-4 h-12">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-3xl font-medium text-slate-200"
              />  
            </div>

            {/* Description */}
            <p className="text-slate-400 mt-6 max-w-xl text-lg leading-relaxed">
              Passionate Full Stack Developer specializing in React,
              Node.js and MongoDB. I enjoy transforming ideas into
              fast, scalable and user-friendly digital experiences.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">

              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "JavaScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    text-sm
                    hover:border-purple-500
                    hover:-translate-y-1
                    hover:bg-white/10
                    transition-all duration-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">

              <a
                href="/resume.pdf"
                download
                className="
                  px-7 py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  hover:scale-105
                  transition
                  font-medium
                "
              >
                Resume
              </a>

              <a
                href="https://github.com/chandana9633"
                target="_blank"
                rel="noreferrer"
                className="
                  px-7 py-3
                  rounded-xl
                  border
                  border-purple-500
                  hover:bg-purple-500/20
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/chandana-p-das-2839222b8/"
                target="_blank"
                rel="noreferrer"
                className="
                  px-7 py-3
                  rounded-xl
                  border
                  border-blue-500
                  hover:bg-blue-500/20
                  transition
                "
              >
                LinkedIn
              </a>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 justify-center lg:justify-start">

              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  10+
                </h3>
                <p className="text-slate-400 text-sm">
                  Projects
                </p>
              </div>

              {/* <div>
                <h3 className="text-3xl font-bold text-blue-400">
                  500+
                </h3>
                <p className="text-slate-400 text-sm">
                  DSA Problems
                </p>
              </div> */}

              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  1+
                </h3>
                <p className="text-slate-400 text-sm">
                  Years Learning
                </p>
              </div>

            </div>

            {/* Featured Project
            <div className="
              mt-10
              max-w-xl
              p-5
              rounded-2xl
              bg-white/5
              backdrop-blur-md
              border border-white/10
            ">
              <p className="text-sm text-purple-400">
                ⭐ Featured Project
              </p>

              <h3 className="text-lg font-semibold mt-2">
                AI Interview Preparation Platform
              </h3>

              <p className="text-slate-400 mt-2">
                React • Node.js • MongoDB • Gemini API
              </p>
            </div> */}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-purple-500
                  via-blue-500
                  to-cyan-500
                  rounded-full
                  blur-3xl
                  opacity-30
                  animate-pulse
                "
              />

             

              {/* Profile Image */}
              <img
                src={chandanaImage}
                alt="Chandana"
                className="
                  relative
                  w-48
                  h-48
                  sm:w-56
                  sm:h-56
                  md:w-80
                  md:h-80
                  object-cover
                  rounded-full
                  border-2
                  border-purple-400/70
                  shadow-2xl
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;