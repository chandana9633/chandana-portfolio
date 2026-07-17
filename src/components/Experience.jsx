function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Brototype Experience */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">
            Full Stack Web Development (MERN Stack)
          </h3>

          <p className="text-purple-400 mt-2">
            Brototype • 2024 – Present
          </p>

          <p className="text-gray-300 mt-6 leading-8">
            Gained hands-on experience building full-stack web applications
            using the MERN stack. Developed RESTful APIs, implemented JWT
            authentication, performed CRUD operations, integrated MongoDB,
            and deployed applications on AWS EC2. Worked extensively with
            Git, GitHub, and modern development workflows.
          </p>
        </div>

        {/* Teaching Experience */}
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">
            AI & Robotics Teacher
          </h3>

          <p className="text-purple-400 mt-2">
            Springs International School
          </p>

          <p className="text-gray-300 mt-6 leading-8">
            Delivered AI and Robotics education while developing strong
            communication, leadership, and mentoring skills. Guided students
            through hands-on technology projects, robotics activities, and
            problem-solving exercises while fostering collaborative learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;