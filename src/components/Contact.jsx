import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-5xl font-bold mb-12">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Feel free to reach out for opportunities,
          collaborations, or just to connect.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <FaEnvelope className="text-3xl mx-auto mb-4 text-purple-400" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-300">
              chandanaadasp@gmail.com
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <FaPhone className="text-3xl mx-auto mb-4 text-purple-400" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">
              +91 7012161022
            </p>
          </div>

          <a
            href="https://github.com/chandana9633"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition"
          >
            <FaGithub className="text-3xl mx-auto mb-4 text-purple-400" />
            <h3 className="font-semibold">GitHub</h3>
          </a>

          <a
            href="https://www.linkedin.com/in/chandana-p-das-2839222b8/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition"
          >
            <FaLinkedin className="text-3xl mx-auto mb-4 text-purple-400" />
            <h3 className="font-semibold">LinkedIn</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;