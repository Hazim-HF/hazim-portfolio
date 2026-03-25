import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight">Hazim Fitri</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="https://linkedin.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Data Engineer & <span className="text-blue-600">SAP Specialist</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Building scalable data pipelines and low-code ecosystems to digitize enterprise workflows. 
          Expertise in SAP MM, Python, and Microsoft Power Platform.
        </p>
        
        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {["SAP MM", "Python", "SQL", "Power Apps", "Apache NiFi", "TypeScript"].map((skill) => (
            <span key={skill} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-semibold shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: NiFi */}
            <div className="group p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 transition">
              <div className="text-blue-600 mb-4 font-mono text-sm uppercase tracking-widest font-bold">Data Engineering</div>
              <h4 className="text-xl font-bold mb-2">Automated NiFi Pipeline</h4>
              <p className="text-slate-600 mb-4">Extracting SFTP data into SQL databases with custom error handling and monitoring.</p>
              <div className="text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">View Case Study →</div>
            </div>

            {/* Project 2: Onboarding App */}
            <div className="group p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 transition">
              <div className="text-green-600 mb-4 font-mono text-sm uppercase tracking-widest font-bold">Power Platform</div>
              <h4 className="text-xl font-bold mb-2">Agent Onboarding App</h4>
              <p className="text-slate-600 mb-4">A low-code ecosystem digitizing HR and IT workflows, reducing onboarding time by 40%.</p>
              <div className="text-sm font-medium text-blue-600 group-hover:underline cursor-pointer">View Case Study →</div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 text-center text-slate-400 text-sm">
        © 2026 Hazim Fitri. Built with Next.js and deployed in the Cloud.
      </footer>
    </main>
  );
}