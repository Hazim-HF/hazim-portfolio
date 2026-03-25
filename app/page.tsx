import { ThemeToggle } from "@/component/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-slate-100 dark:border-slate-800">
        <h1 className="text-xl font-bold tracking-tight">Hazim Fitri</h1>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
          <ThemeToggle />
          <a href="https://linkedin.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Data Engineer & <span className="text-blue-600 dark:text-blue-400">SAP Specialist</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Building scalable data pipelines and low-code ecosystems to digitize enterprise workflows. 
          Expertise in SAP MM, Python, and Microsoft Power Platform.
        </p>
        
        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {["SAP MM", "Python", "SQL", "Power Apps", "Apache NiFi", "TypeScript"].map((skill) => (
            <span key={skill} className="px-4 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-semibold shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 py-20 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: NiFi */}
            <div className="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mb-4 font-mono text-sm uppercase tracking-widest font-bold">Data Engineering</div>
              <h4 className="text-xl font-bold mb-2">Automated NiFi Pipeline</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Extracting SFTP data into SQL databases with custom error handling and monitoring.</p>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline cursor-pointer">View Case Study →</div>
            </div>

            {/* Project 2: Onboarding App */}
            <div className="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500 transition-all shadow-sm">
              <div className="text-green-600 dark:text-green-400 mb-4 font-mono text-sm uppercase tracking-widest font-bold">Power Platform</div>
              <h4 className="text-xl font-bold mb-2">Agent Onboarding App</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">A low-code ecosystem digitizing HR and IT workflows, reducing onboarding time by 40%.</p>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline cursor-pointer">View Case Study →</div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 text-center text-slate-400 dark:text-slate-600 text-sm">
        © 2026 Hazim Fitri. Built with Next.js and deployed in the Cloud.
      </footer>
    </main>
  );
}