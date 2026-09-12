// ==========================================================================
// CENTRAL DATA STORE: THE NATIONAL INSTITUTE OF ENGINEERING (NIE), MYSURU
// Official IEEE Conference - ICNCST 2026
// ==========================================================================

export const conferenceData = {
  // Institutional Information
  institution: {
    name: "The National Institute of Engineering",
    shortName: "NIE",
    affiliation: "Grant-in-Aid Autonomous Institution under VTU, Belagavi",
    approvedBy: "Approved by AICTE, New Delhi",
    accreditation: "Accredited by NAAC with 'A' Grade & NBA",
    established: "1946",
    location: "Mysuru, Karnataka, India",
    address: "Manandavadi Road, Mysuru – 570008, Karnataka, India",
    website: "https://nie.ac.in",
    ieeeStudentBranch: "IEEE NIE Student Branch (STB16211)",
    history: "Established in 1946 as the second oldest engineering college in Karnataka, NIE is a pioneer in technical education. Nurtured by visionary founders, NIE has produced distinguished alumni globally including visionary engineers, corporate leaders, and scientists.",
    stats: {
      alumni: "30,000+",
      ranking: "Ranked among Top Engineering Institutions in India (NIRF)",
      patents: "50+ Filed",
      researchCenters: "14 Recognized R&D Centers"
    }
  },

  // Conference Metadata
  conference: {
    name: "International Conference on Next-Generation Computing and Sustainable Technology",
    acronym: "ICNCST 2026",
    edition: "1st Edition",
    ieeeNotice: "Accepted and presented papers will be submitted for possible inclusion in IEEE Xplore, subject to meeting IEEE Xplore's scope and quality requirements.",
    dates: "November 19–21, 2026",
    countdownTarget: "2026-11-19T09:00:00+05:30",
    venue: "The National Institute of Engineering, Mysuru, Karnataka, India",
    mode: "Hybrid (In-person & Virtual Presentation Options)",
    theme: "Engineering Innovations for Sustainable, Secure and Intelligent Future",
    registrationUrl: "#registration",
    paperSubmissionUrl: "#submission",
    brochureUrl: "#brochure",
    contactEmail: "ieeeconference@nie.ac.in",
    contactPhone: "+91 821 2480475",
    cmtUrl: "https://cmt3.research.microsoft.com/"
  },

  // Quick Action Buttons
  quickActions: [
    {
      id: "qa-submit",
      title: "Submit Paper",
      desc: "Call for papers open for original manuscripts",
      link: "#publication",
      icon: "FileUp"
    },
    {
      id: "qa-register",
      title: "Register Now",
      desc: "Early bird registration tiers available",
      link: "#registration",
      icon: "UserCheck"
    },
    {
      id: "qa-dates",
      title: "Important Dates",
      desc: "Submission deadlines & milestone schedules",
      link: "#timeline",
      icon: "Calendar"
    },
    {
      id: "qa-brochure",
      title: "Download Brochure",
      desc: "Comprehensive conference CFP document",
      link: "#publication",
      icon: "Download"
    },
    {
      id: "qa-contact",
      title: "Contact Desk",
      desc: "Get in touch with the organizing secretariat",
      link: "#contact",
      icon: "Mail"
    }
  ],

  // About Conference Section
  aboutConference: {
    overview: "The International Conference on Next-Generation Computing and Sustainable Technology (ICNCST 2026) is organized by The National Institute of Engineering (NIE), Mysuru in technical co-sponsorship with IEEE Bangalore Section. The conference serves as a premier international forum for researchers, academicians, scientists, and industrial practitioners to share novel methodologies, cutting-edge empirical findings, and visionary applications in emerging technology domains.",
    scope: "The conference spans foundational computing, machine intelligence, cybersecurity, autonomous edge systems, green energy infrastructures, and responsible AI governance. All peer-reviewed submissions undergo a rigorous single-blind peer-review process evaluated on technical soundness, originality, clarity, and societal impact.",
    whyAttend: [
      {
        icon: "Lightbulb",
        title: "Present Research",
        desc: "Disseminate original research findings to a global academic audience and gain invaluable peer feedback."
      },
      {
        icon: "Users2",
        title: "Global Networking",
        desc: "Interact with leading scientists, postdoctoral fellows, and tech innovators from across the globe."
      },
      {
        icon: "BookOpenCheck",
        title: "Learn from Experts",
        desc: "Attend visionary keynote addresses, tutorials, and invited technical talks from IEEE distinguished leaders."
      },
      {
        icon: "Building2",
        title: "Industry Collaboration",
        desc: "Engage with enterprise sponsors and technology leaders bridging theoretical research with industrial deployment."
      }
    ]
  },

  // Key Statistics (Editable Values)
  statistics: [
    { label: "Research Papers", value: "350+", target: 350, suffix: "+" },
    { label: "Global Delegates", value: "600+", target: 600, suffix: "+" },
    { label: "Institutions Represented", value: "90+", target: 90, suffix: "+" },
    { label: "Countries Participating", value: "20+", target: 20, suffix: "+" }
  ],

  // Distinguished Speakers
  speakers: [
    {
      id: "sp-1",
      name: "Prof. Rajesh K. Sharma",
      role: "Keynote Speaker",
      designation: "Professor & Chair of Computer Science",
      institution: "Indian Institute of Science (IISc), Bengaluru",
      researchArea: "Deep Learning, Autonomous Vision & AI Systems",
      bio: "Prof. Sharma is an IEEE Fellow with over 25 years of research in computer vision, robotics, and generative architectures. He has published 180+ peer-reviewed papers in top IEEE transactions.",
      keynoteTitle: "Autonomous Multi-Agent Intelligence for Complex Sensing Environments",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sp-2",
      name: "Dr. Elena Rostova",
      role: "International Keynote Speaker",
      designation: "Director of Sustainable Computing Lab",
      institution: "Technical University of Munich (TUM), Germany",
      researchArea: "Green Data Centers & Energy-Efficient Edge AI",
      bio: "Dr. Rostova spearheads research in low-carbon cloud infrastructures and neuromorphic hardware. She serves as an advisor to the European Green Digital Coalition.",
      keynoteTitle: "Toward Carbon-Zero Supercomputing: Architectures and Algorithms",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sp-3",
      name: "Dr. Vikramaditya Sen",
      role: "IEEE Distinguished Lecturer",
      designation: "Principal Research Scientist",
      institution: "Qualcomm Wireless R&D / IEEE ComSoc",
      researchArea: "6G Telecommunications & Quantum Networks",
      bio: "Dr. Sen is a recognized IEEE Distinguished Lecturer specializing in terahertz frequency communications, intelligent reflecting surfaces, and quantum key distribution.",
      keynoteTitle: "6G Protocols: Convergence of Ubiquitous Sensing and Resilient Networking",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sp-4",
      name: "Prof. Anita Deshmukh",
      role: "Keynote Speaker",
      designation: "Dean of R&D & Cyber Resilience Fellow",
      institution: "National Institute of Technology (NITK), Surathkal",
      researchArea: "Zero-Trust Architectures & Cryptographic Hardware",
      bio: "Prof. Deshmukh has authored leading textbooks on modern cryptography and advises defense and banking agencies on critical infrastructure resilience.",
      keynoteTitle: "Post-Quantum Cryptography in Distributed Financial & Grid Ecosystems",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    }
  ],

  // Conference Tracks & Subtopics
  tracks: [
    {
      id: "track-1",
      number: "01",
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancements in theoretical foundations, foundational models, and applied intelligent systems.",
      topics: [
        "Deep Learning Architectures & Transformers",
        "Generative AI & Large Language Models",
        "Explainable, Ethical & Trustworthy AI",
        "Computer Vision & Multimodal Perception",
        "Natural Language Processing & Speech",
        "Reinforcement Learning & Autonomy"
      ]
    },
    {
      id: "track-2",
      number: "02",
      title: "Data Science & Intelligent Analytics",
      description: "Big data management, statistical learning, and domain-specific predictive computing.",
      topics: [
        "Scalable Big Data Frameworks",
        "Predictive Modeling & Statistical Inference",
        "Healthcare & Biomedical Informatics",
        "Financial Analytics & Algorithmic FinTech",
        "Knowledge Graphs & Semantic Web",
        "Spatial-Temporal & Geospatial Analytics"
      ]
    },
    {
      id: "track-3",
      number: "03",
      title: "Cybersecurity, Privacy & Blockchain",
      description: "Defending distributed computing environments, cryptographic protocols, and decentralized ledgers.",
      topics: [
        "Zero-Trust Architecture & Threat Intelligence",
        "Post-Quantum Cryptography & Security Protocols",
        "Blockchain, Smart Contracts & Distributed Ledgers",
        "Privacy-Preserving Federated Learning",
        "Cloud, Container & Virtualization Defense",
        "IoT & Industrial Control System Security"
      ]
    },
    {
      id: "track-4",
      number: "04",
      title: "IoT, Embedded Systems & Robotics",
      description: "Sensor ecosystems, edge intelligence, cyber-physical hardware, and robotic manipulation.",
      topics: [
        "Smart Sensing & Industrial IoT (IIoT)",
        "Edge Intelligence & TinyML Systems",
        "Autonomous Ground & Aerial Vehicles (UAVs)",
        "Cyber-Physical Systems & Digital Twins",
        "Low-Power VLSI & Embedded Firmware",
        "Human-Robot Collaboration & Soft Robotics"
      ]
    },
    {
      id: "track-5",
      number: "05",
      title: "Sustainable Computing & Clean Energy",
      description: "Eco-friendly technologies, smart grid management, and carbon-efficient computing.",
      topics: [
        "Green Cloud & Energy-Aware Architectures",
        "Smart Grid Control & Microgrid Automation",
        "Electric Mobility & Battery Management",
        "Integrated Systems for Circular Economy",
        "Carbon Capture & Resource Management",
        "Precision Agriculture with Precision Sensors"
      ]
    },
    {
      id: "track-6",
      number: "06",
      title: "Next-Generation Communications",
      description: "Terahertz networks, non-terrestrial satellite communication, and optical transmission.",
      topics: [
        "5G-Advanced and 6G Cellular Standards",
        "Software-Defined Networks (SDN) & NFV",
        "Satellite, HAPS & Non-Terrestrial Networks",
        "MIMO, RIS & Intelligent Surface Antennas",
        "Quantum Communication & Key Distribution",
        "Vehicular V2X & Critical Communications"
      ]
    }
  ],

  // Publication & Guidelines
  publication: {
    publisher: "IEEE Xplore Digital Library",
    disclaimer: "Accepted and presented papers will be submitted for possible inclusion into IEEE Xplore, subject to meeting IEEE Xplore's scope and quality requirements. IEEE reserves the right to exclude any paper from distribution after the conference if it does not satisfy quality standards or is not presented at the conference.",
    paperFormat: "IEEE 2-column conference format (max 6 pages including figures, tables & references). Extra 2 pages allowed with surcharge.",
    plagiarismRule: "All manuscripts undergo mandatory CrossCheck screening. Submissions with similarity index above standard IEEE thresholds will be rejected without review.",
    templatesUrl: "https://www.ieee.org/conferences/publishing/templates.html",
    guidelines: [
      "Submissions must report original, unpublished technical research not currently under review elsewhere.",
      "The official IEEE conference templates for MS Word and LaTeX must be strictly utilized without modifying margins.",
      "Electronic submissions must be submitted in readable, unencrypted PDF format via Microsoft CMT.",
      "At least one author of each accepted paper must register at the applicable author rate and present the work in person or approved virtual mode."
    ]
  },

  // Important Dates & Milestone Timeline
  importantDates: [
    {
      id: "d1",
      title: "Call for Papers Announcement",
      date: "May 15, 2026",
      status: "completed",
      description: "Submission system opens on Microsoft CMT portal."
    },
    {
      id: "d2",
      title: "Full Manuscript Submission Deadline",
      date: "August 15, 2026",
      status: "active",
      description: "Full research papers up to 6 pages in standard IEEE format."
    },
    {
      id: "d3",
      title: "Notification of Acceptance",
      date: "September 25, 2026",
      status: "upcoming",
      description: "Peer-review feedback and acceptance decisions communicated."
    },
    {
      id: "d4",
      title: "Early Bird Registration Deadline",
      date: "October 10, 2026",
      status: "upcoming",
      description: "Concessional registration closes for authors and delegates."
    },
    {
      id: "d5",
      title: "Camera-Ready Manuscript & Copyright",
      date: "October 20, 2026",
      status: "upcoming",
      description: "Final PDF submission with signed IEEE copyright transfer form."
    },
    {
      id: "d6",
      title: "Conference Inauguration & Technical Sessions",
      date: "November 19–21, 2026",
      status: "upcoming",
      description: "Keynotes, oral track presentations, panel sessions, and awards banquet.",
      isHighlight: true
    }
  ],

  // Awards & Recognition
  awards: [
    {
      id: "aw-1",
      title: "Best Research Paper Award",
      description: "Conferred to the author(s) demonstrating superior scientific originality, analytical rigor, and transformative technological impact.",
      eligibility: "All regular technical papers peer-reviewed, accepted, and presented in person during oral conference tracks."
    },
    {
      id: "aw-2",
      title: "Best Student Research Paper Award",
      description: "Honoring outstanding technical contributions led and presented by undergraduate or postgraduate student researchers.",
      eligibility: "First author must be a registered full-time student at an accredited university at the time of submission."
    },
    {
      id: "aw-3",
      title: "Best Ph.D. Dissertation Award",
      description: "Recognizing high-impact doctoral research with proven citation significance, industry relevance, or social value.",
      eligibility: "Ph.D. theses successfully defended within the preceding 18 months in fields aligned with conference tracks."
    }
  ],

  // Registration Fees
  registration: {
    earlyBirdDeadline: "October 10, 2026",
    regularDeadline: "October 25, 2026",
    notes: [
      "All registration fees are inclusive of applicable 18% GST.",
      "At least one author must register at the Author rate for each accepted paper to ensure inclusion in conference proceedings.",
      "Registration covers admission to all keynote sessions, oral tracks, conference banquet, kit, and proceedings volume."
    ],
    tiers: [
      {
        category: "IEEE Student Members",
        earlyBirdINR: "₹ 5,000",
        earlyBirdUSD: "$ 80",
        regularINR: "₹ 6,000",
        regularUSD: "$ 100"
      },
      {
        category: "Non-IEEE Student Members",
        earlyBirdINR: "₹ 6,500",
        earlyBirdUSD: "$ 110",
        regularINR: "₹ 7,500",
        regularUSD: "$ 130"
      },
      {
        category: "IEEE Faculty / Academicians",
        earlyBirdINR: "₹ 7,000",
        earlyBirdUSD: "$ 120",
        regularINR: "₹ 8,500",
        regularUSD: "$ 150"
      },
      {
        category: "Non-IEEE Faculty / Academicians",
        earlyBirdINR: "₹ 8,500",
        earlyBirdUSD: "$ 140",
        regularINR: "₹ 10,000",
        regularUSD: "$ 175"
      },
      {
        category: "Industry Professionals",
        earlyBirdINR: "₹ 10,000",
        earlyBirdUSD: "$ 180",
        regularINR: "₹ 12,500",
        regularUSD: "$ 220"
      },
      {
        category: "Attendee / Delegate (No Paper)",
        earlyBirdINR: "₹ 2,000",
        earlyBirdUSD: "$ 40",
        regularINR: "₹ 2,500",
        regularUSD: "$ 50"
      }
    ]
  },

  // Organizing Committee
  committee: {
    chiefPatrons: [
      {
        name: "Sri. N. Ramanuja",
        designation: "President, The NIE Society",
        institution: "The National Institute of Engineering, Mysuru"
      }
    ],
    patrons: [
      {
        name: "Sri. S. L. Ramachandra",
        designation: "Hon. Secretary, The NIE Society",
        institution: "The National Institute of Engineering, Mysuru"
      },
      {
        name: "Dr. Rohini Nagapadma",
        designation: "Principal",
        institution: "The National Institute of Engineering, Mysuru"
      },
      {
        name: "Dr. M. S. Ganesh Prasad",
        designation: "Vice Principal",
        institution: "The National Institute of Engineering, Mysuru"
      }
    ],
    generalChairs: [
      {
        name: "Dr. H. D. Phaneendra",
        designation: "Professor & Head, Department of Computer Science & Engineering",
        institution: "NIE, Mysuru"
      },
      {
        name: "Dr. C. Vidya Raj",
        designation: "Professor & Dean (R&D)",
        institution: "NIE, Mysuru"
      }
    ],
    conferenceChairs: [
      {
        name: "Dr. P. Devaki",
        designation: "Professor & Head, Department of Information Science & Engineering",
        institution: "NIE, Mysuru"
      },
      {
        name: "Dr. K. V. S. S. S. S. Sairam",
        designation: "Professor & Head, Department of Electronics & Communication Engineering",
        institution: "NIE, Mysuru"
      }
    ],
    technicalChairs: [
      {
        name: "Dr. G. S. Anitha",
        designation: "Associate Professor, Department of Electrical & Electronics Engineering",
        institution: "NIE, Mysuru"
      },
      {
        name: "Dr. N. Kumar",
        designation: "Associate Professor, Department of Computer Science & Engineering",
        institution: "NIE, Mysuru"
      }
    ],
    publicationChairs: [
      {
        name: "Dr. S. Parameshwara",
        designation: "Associate Professor, Department of ECE",
        institution: "NIE, Mysuru"
      }
    ],
    financeChairs: [
      {
        name: "Dr. B. S. Jayashree",
        designation: "Professor, Department of CSE",
        institution: "NIE, Mysuru"
      }
    ]
  },

  // Venue & Travel
  venue: {
    institution: "The National Institute of Engineering (NIE)",
    campus: "NIE Diamond Jubilee Campus / South Campus",
    city: "Mysuru, Karnataka – 570008, India",
    description: "Mysuru is celebrated as the cultural and heritage capital of Karnataka, situated at the base of the sacred Chamundi Hills. Renowned for its royal palaces, clean air, educational prominence, and flourishing IT corridor, Mysuru provides an ideal setting for academic deliberation and technical discourse.",
    connectivity: [
      {
        mode: "Air",
        desc: "Mysuru Airport (MYQ) connects to major hubs; Kempegowda International Airport Bengaluru (BLR, ~170 km) provides worldwide non-stop flights with expressway connectivity via flybus/trains."
      },
      {
        mode: "Train",
        desc: "Mysuru Junction (MYS) is well-connected across India. The high-speed Vande Bharat Express connects Bengaluru to Mysuru in just 75 minutes."
      },
      {
        mode: "Road / Bus",
        desc: "The 10-lane Bengaluru-Mysuru Expressway ensures a smooth 90-minute drive. KSRTC operates premium non-stop electric bus services every 10 minutes."
      },
      {
        mode: "Local Transit",
        desc: "The NIE campus is located on Manandavadi Road, just 3.5 km from Mysuru City Railway Station and Suburban Bus Stand. App-based cabs and autos are readily available."
      }
    ]
  },

  // Gallery
  gallery: [
    {
      id: "g-1",
      category: "Campus",
      title: "NIE Iconic Campus Quadrangle",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g-2",
      category: "Conference",
      title: "Inaugural Ceremony & Lighting of the Lamp",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g-3",
      category: "Keynotes",
      title: "Plenary Keynote Session by Global Scholar",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g-4",
      category: "Students",
      title: "Interactive Student Research Poster Session",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g-5",
      category: "Awards",
      title: "Best Research Paper Felicitation Banquet",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g-6",
      category: "Conference",
      title: "Technical Parallel Session Presentations",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Sponsors & Partners Placeholder
  sponsors: [
    {
      category: "Technical Co-Sponsor",
      partners: [
        { name: "IEEE Bangalore Section", type: "Technical Co-Sponsor", link: "https://ieeebangalore.org" },
        { name: "IEEE Computer Society Bangalore Chapter", type: "Technical Partner", link: "https://cs.ieeebangalore.org" }
      ]
    },
    {
      category: "Academic & Research Partners",
      partners: [
        { name: "Visvesvaraya Technological University (VTU)", type: "Affiliating University", link: "https://vtu.ac.in" },
        { name: "IEEE NIE Student Branch", type: "Organizing Host Branch", link: "#" }
      ]
    },
    {
      category: "Industry & Knowledge Partners",
      partners: [
        { name: "Innovation Partner Desk", type: "Industry Collaborator", link: "#" },
        { name: "Digital Proceedings Partner", type: "Technical Service", link: "#" }
      ]
    }
  ],

  // Frequently Asked Questions
  faq: [
    {
      question: "Who can submit research manuscripts to ICNCST 2026?",
      answer: "Academicians, university researchers, postgraduate and doctoral scholars, scientists, and industry technology professionals worldwide are invited to submit original, unpublished research papers."
    },
    {
      question: "What is the official paper formatting template and page limit?",
      answer: "Manuscripts must strictly adhere to the standard IEEE two-column conference format (LaTeX or MS Word). The paper length should be between 5 to 6 pages including all diagrams, tables, algorithms, and references."
    },
    {
      question: "What is the policy regarding plagiarism and peer review?",
      answer: "All submissions are subjected to automated similarity checks using IEEE CrossCheck. Manuscripts exceeding allowed thresholds or violating originality ethics will be rejected immediately without review. All qualifying papers undergo single-blind peer review by at least two domain specialists."
    },
    {
      question: "Will accepted and presented papers appear in IEEE Xplore?",
      answer: "All accepted and presented papers will be submitted for possible inclusion in IEEE Xplore, subject to satisfying IEEE scope and quality screening guidelines."
    },
    {
      question: "Is IEEE membership mandatory to submit or register?",
      answer: "No, IEEE membership is not compulsory. Authors without IEEE membership are warmly welcome to submit and participate, though active IEEE members enjoy discounted registration fees."
    },
    {
      question: "Can international authors present their research virtually?",
      answer: "Yes, ICNCST 2026 is organized as a hybrid conference. Provisions for remote video presentations and Q&A will be arranged for international delegates and authors with verified travel constraints."
    },
    {
      question: "How do authors receive registration confirmations and receipts?",
      answer: "Upon completing online registration through the portal and verifying payment, authors receive an automated confirmation email along with an official GST-compliant payment receipt and invitation letter."
    },
    {
      question: "How can I get in touch with the conference secretariat?",
      answer: "You can email our organizing team directly at ieeeconference@nie.ac.in or submit an inquiry using the contact form at the bottom of this website. Our team responds within 24–48 hours."
    }
  ]
};
