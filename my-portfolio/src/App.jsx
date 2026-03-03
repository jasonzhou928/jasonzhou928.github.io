import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * USER CONFIGURATION
 * ------------------------------------------------------------------
 */

const PROFILE = {
  name: "Sixu Zhou",
  role: "PhD Candidate",
  department: "EPIC Lab", 
  university: "Georgia Institute of Technology",
  bio: [
    <>I am a PhD candidate at the <strong>Georgia Institute of Technology</strong>, focusing on the intersection of <strong>robotics</strong>, <strong>wearable sensing</strong>, and <strong>biomechanics</strong>.</>,
    <>My primary research interests include <strong>Prosthetics</strong>, <strong>Machine Learning</strong>, <strong>Locomotion</strong>, <strong>Control</strong>, and <strong>Biomechanics</strong>. I work on developing intelligent control systems for robotic lower-limb prostheses to improve user mobility, locomotion stability and quality of life.</>,
    <>My work involves using <span className="text-blue-600 font-semibold">deep learning</span> for intent recognition and analyzing the biomechanics of powered prosthetic devices.</>
  ],
  email: "sixu.zhou@gatech.edu",
  links: {
    googleScholar: "https://scholar.google.com/citations?user=QGegWe4AAAAJ&hl=en",
    github: "https://github.gatech.edu/szhou357", 
    linkedin: "https://www.linkedin.com/in/sixu-zhou"
  },
  image: "/headshot.png" 
};

const NEWS = [
  { date: "2025", content: "Multiple papers accepted to IROS, RA-L, Journal of Biomechanics, Clinical Biomechanics and IEEE Transactions on Medical Robotics and Bionics (TMRB)." },
  { date: "2022", content: "Presented work on OpenSource Leg OpenSim models at ISMR 2022." }
];

const PUBLICATIONS = [
  {
    title: "Toward personalizing prosthesis prescription: A take‐home study of three microprocessor‐controlled prosthetic knees: A randomized crossover study",
    authors: ["K Herrin", "S Kestur", "Sixu Zhou", "G O'Sullivan", "T Snow", "WL Childers", "A Young"],
    venue: "Physical Medicine and Rehabilitation (PM&R), 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:eQOLeE2rZwMC" }]
  },
  {
    title: "Transfer Learning for Walking Speed Estimation Across Novel Prosthetic Devices and Populations",
    authors: ["J Maldonado-Contreras", "C Johnson", "IJ Knight", "A Sawant", "S Zhou", "H Kim", "K Herrin", "A Young"],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:YsMSGLbcyi4C" }]
  },
  {
    title: "An anthropometry-based personalization of powered knee prosthesis for metabolic efficiency",
    authors: ["Sixu Zhou", "H Kim", "JY Maldonado-Contreras", "AÖ Sverrisson", "D Langlois", "K Herrin", "A Young"],
    venue: "IEEE Transactions on Medical Robotics and Bionics (TMRB), 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:W7OEmFMy1HYC" }]
  },
  {
    title: "A clinical decision-making algorithm for the personalized prescription of microprocessor-controlled prosthetic knees: An evidence-based approach based on a randomized trial",
    authors: ["Carlos Carrasquillo", "Sixu Zhou", "W Lee Childers", "Aaron Young", "Kinsey Herrin"],
    venue: "Prosthetics and Orthotics International, 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:Tyk-4Ss8FVUC" }]
  },
  {
    title: "Comparing the biomechanical response of users of an open-source powered knee and ankle prosthesis versus a passive prosthesis during ramp and stair ambulation",
    authors: ["Sixu Zhou", "S Kestur", "J Maldonado", "K Herrin", "N Fey", "A Young"],
    venue: "Journal of Biomechanics, 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:zYLM7Y9cAGgC" }]
  },
  {
    title: "Biomechanical and energetic effects of knee flexion control during incline walking for users of the Power Knee",
    authors: ["Sixu Zhou", "H Kim", "J Maldonado-Contreras", "AÖ Sverrisson", "D Langlois", "K Herrin", "A Young"],
    venue: "Clinical Biomechanics, 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:qjMakFHDy7sC" }]
  },
  {
    title: "Real-time Adaptation of Deep Learning Walking Speed Estimators Enables Biomimetic Assistance Modulation in an Open-Source Bionic Leg",
    authors: ["J Maldonado-Contreras", "C Johnson", "S Zhou", "H Kim", "I Knight", "KR Herrin", "A Young"],
    venue: "IEEE Transactions on Medical Robotics and Bionics, 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:UeHWp8X0CEIC" }]
  },
  {
    title: "Continuous-Context, User-Independent, Real-Time Intent Recognition for Powered Lower-Limb Prostheses",
    authors: ["K Bhakta", "J Maldonado-Contreras", "J Camargo", "S Zhou", "W Compton", "K Herrin", "A Young"],
    venue: "Journal of Biomechanical Engineering, 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:d1gkVwhDpl0C" }]
  },
  {
    title: "Mode-Unified Intent Estimation of a Robotic Prosthesis using Deep-Learning",
    authors: ["H Kim", "D Lee", "JY Maldonado-Contreras", "Sixu Zhou", "KR Herrin", "AJ Young"],
    venue: "IEEE Robotics and Automation Letters (RA-L), 2025",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:IjCSPb-OGe4C" }]
  },
  {
    title: "Comparing the lower limb joint biomechanics of the Power Knee, C-Leg and Rheo Knee during ramp and stair ambulation",
    authors: ["S Kestur", "S Zhou", "G O'Sullivan", "A Young", "K Herrin"],
    venue: "Journal of Biomechanics, 2024",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&sortby=pubdate&citation_for_view=QGegWe4AAAAJ:2osOgNQ5qMEC" }]
  },
  {
    title: "Opensim model for biomechanical analysis with the open-source bionic leg",
    authors: ["J Camargo", "K Bhakta", "J Maldonado-Contreras", "Sixu Zhou", "K Herrin", "A Young"],
    venue: "International Symposium on Medical Robotics (ISMR), 2022",
    links: [{ label: "Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:u5HHmVD_uO8C" }]
  }
];

const SERVICE = [
  "Reviewer: IEEE Robotics and Automation Letters (RA-L)",
  "Reviewer: Wearable Technologies (WT)",
  "Reviewer: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
  "Reviewer: IEEE/RSJ International Conference on Automation Science and Engineering (CASE)"
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header / Intro Section */}
        <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-2">{PROFILE.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{PROFILE.role} at {PROFILE.department}, {PROFILE.university}</p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6 text-justify">
              {PROFILE.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 hover:underline flex items-center gap-1">
                <Mail size={16} /> Email
              </a>
              <a href={PROFILE.links.googleScholar} className="hover:text-blue-600 hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
                <FileText size={16} /> Google Scholar
              </a>
              <a href={PROFILE.links.github} className="hover:text-blue-600 hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
                <Github size={16} /> Github
              </a>
              <a href={PROFILE.links.linkedin} className="hover:text-blue-600 hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover block"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Photo+Missing"; }}
              />
            </div>
          </div>
        </section>

        <div className="space-y-20">
          {/* News Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">News</h2>
            <div className="space-y-4">
              {NEWS.map((item, index) => (
                <div key={index} className="flex gap-4 text-gray-700">
                  <span className="font-bold text-gray-400 min-w-[60px]">[{item.date}]</span>
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8 border-b pb-2 text-gray-800">Publications</h2>
            <div className="space-y-10">
              {PUBLICATIONS.map((pub, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors leading-snug">
                    <a href={pub.links[0]?.url} target="_blank" rel="noreferrer">{pub.title}</a>
                  </h3>
                  <div className="text-gray-600 mt-2">
                    {pub.authors.map((a, i) => (
                      <span key={i} className={a.includes("Sixu Zhou") || a === "S Zhou" || a === "Sixu Zhou" ? "font-bold text-gray-900" : "font-normal"}>
                        {a}{i < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-500 mt-1">{pub.venue}</p>
                  <div className="flex gap-3 mt-2">
                    {pub.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">Academic Service</h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
              {SERVICE.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-24 pt-8 border-t text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        </footer>

      </main>
    </div>
  );
}