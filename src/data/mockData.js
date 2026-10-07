// Curated dataset for VeriMatch AI
export const SAMPLE_RESUME = {
  name: "Sarah Chen",
  email: "sarah.chen@example.com",
  phone: "+1 (555) 382-9012",
  location: "San Francisco, CA (Open to Remote)",
  title: "Senior Full-Stack & AI Systems Engineer",
  summary: "Full-stack engineer with 6+ years specializing in React/Node.js microservices and production LLM orchestration. Built high-throughput retrieval pipelines and scalable web applications serving 2M+ monthly active users.",
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      year: "2018 - 2022",
      gpa: "3.85 / 4.0"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Lead Full-Stack AI Engineer",
      company: "Nexus AI Systems",
      duration: "2023 - Present (2 yrs)",
      description: "Architected enterprise RAG retrieval services using LangChain, pgvector, and FastAPI. Decreased document question-answering latency by 42% while handling 15M daily requests. Built real-time React dashboard with WebSockets.",
      skillsApplied: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "RAG"]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "CloudScale Technologies",
      duration: "2021 - 2023 (2.5 yrs)",
      description: "Engineered multi-tenant SaaS frontend in React + TypeScript. Implemented automated CI/CD deployment pipelines on AWS ECS. Mentored 4 junior engineers in test-driven development.",
      skillsApplied: ["React", "Node.js", "AWS", "Docker", "GraphQL", "Jest", "Tailwind CSS"]
    },
    {
      id: "exp-3",
      role: "Software Engineering Intern",
      company: "InnovateLabs",
      duration: "2020 - 2021 (1 yr)",
      description: "Developed responsive customer-facing portals using Vue.js and RESTful APIs. Wrote automated Cypress end-to-end integration test suites.",
      skillsApplied: ["JavaScript", "REST APIs", "Git", "SQL", "HTML/CSS"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "DocuSense LLM Copilot",
      url: "https://github.com/sarahchen/docusense-llm",
      description: "Autonomous document intelligence platform extracting structured JSON from multi-page PDFs using hybrid semantic search and local embedding caching.",
      techStack: ["Python", "FastAPI", "pgvector", "React", "Tailwind CSS"],
      metrics: "Processes 20-page legal briefs in 1.4 seconds with 97% field extraction accuracy."
    },
    {
      id: "proj-2",
      name: "Distributed Task Orchestrator",
      url: "https://github.com/sarahchen/task-orchestrator",
      description: "Lightweight distributed job queue built with Redis Streams and Node.js worker pools with exponential backoff and dead-letter channels.",
      techStack: ["Node.js", "Redis", "TypeScript", "Docker"],
      metrics: "Maintains 99.99% uptime under 10k tasks/sec spike simulations."
    }
  ],
  skills: [
    { name: "React", category: "Frontend", level: "Proven", years: 5, freshness: "High", proof: "Built 3 enterprise portals; open-source contributor", score: 95 },
    { name: "TypeScript", category: "Language", level: "Proven", years: 4, freshness: "High", proof: "Primary language across Nexus AI and CloudScale repos", score: 92 },
    { name: "Node.js", category: "Backend", level: "Proven", years: 5, freshness: "High", proof: "Engineered high-concurrency microservices at CloudScale", score: 88 },
    { name: "Python", category: "Language", level: "Proven", years: 3, freshness: "High", proof: "Developed production FastAPI LLM backend at Nexus AI", score: 86 },
    { name: "FastAPI", category: "Backend", level: "Proven", years: 2, freshness: "High", proof: "Nexus AI core backend architecture serving 15M calls", score: 85 },
    { name: "RAG & LLM Pipelines", category: "AI/ML", level: "Proven", years: 2, freshness: "Rising", proof: "Production pgvector retrieval pipeline deployed", score: 84 },
    { name: "PostgreSQL & pgvector", category: "Database", level: "Proven", years: 4, freshness: "Rising", proof: "Designed relational schemas and vector embeddings storage", score: 82 },
    { name: "Docker", category: "DevOps", level: "Proven", years: 3, freshness: "High", proof: "Containerized microservices running in ECS", score: 80 },
    { name: "AWS (ECS/S3/Lambda)", category: "Cloud", level: "Demonstrated", years: 2.5, freshness: "Medium", proof: "Managed deployments and S3 asset buckets", score: 75 },
    { name: "Tailwind CSS", category: "Frontend", level: "Proven", years: 3, freshness: "High", proof: "Styling system for DocuSense and enterprise SaaS", score: 90 },
    { name: "GraphQL", category: "Backend", level: "Demonstrated", years: 2, freshness: "Fading", proof: "Created Apollo federation schemas at CloudScale", score: 70 },
    { name: "System Design", category: "Architecture", level: "Demonstrated", years: 3, freshness: "High", proof: "Architected distributed queue and multi-tenant SaaS", score: 82 },
    { name: "Vector Databases (Pinecone/Milvus)", category: "AI/ML", level: "Weak", years: 1, freshness: "Rising", proof: "Evaluated in prototype staging, not primary production driver", score: 55 },
    { name: "Kubernetes (K8s)", category: "DevOps", level: "Missing proof", years: 0.5, freshness: "Medium", proof: "Self-studied tutorials; no verified production deployment", score: 35 },
    { name: "CI/CD (GitHub Actions)", category: "DevOps", level: "Demonstrated", years: 3, freshness: "High", proof: "Automated test and lint verification pipelines", score: 78 }
  ]
};

export const SAMPLE_JOB = {
  id: "job-ai-lead",
  title: "Senior AI Application Engineer",
  company: "Apex Cognitive Systems",
  location: "San Francisco, CA / Remote",
  salary: "$165,000 - $195,000",
  experienceRequired: "5+ years",
  summary: "We are seeking a Senior AI Application Engineer to lead the development of our next-generation LLM workflow platform. You will build user-facing generative tools, optimize RAG retrieval systems, and integrate vector indexing at scale.",
  mustHaves: [
    "5+ years building web applications with React and modern TypeScript",
    "Strong backend experience with Python (FastAPI) or Node.js",
    "Proven experience developing production RAG, vector retrieval, and prompt pipelines",
    "Deep understanding of relational databases (PostgreSQL) and vector indexing",
    "Experience deploying containerized services with Docker"
  ],
  wishList: [
    "Experience with dedicated vector engines (Pinecone, Milvus, or Qdrant)",
    "Hands-on Kubernetes cluster orchestration experience",
    "Contributions to open-source developer tooling or agent frameworks",
    "Familiarity with anti-hallucination guardrails and evaluation metrics"
  ],
  requiredSkills: [
    { name: "React", importance: "Must-Have", weight: 15 },
    { name: "TypeScript", importance: "Must-Have", weight: 15 },
    { name: "Python", importance: "Must-Have", weight: 15 },
    { name: "FastAPI", importance: "Must-Have", weight: 10 },
    { name: "RAG & LLM Pipelines", importance: "Must-Have", weight: 15 },
    { name: "PostgreSQL & pgvector", importance: "Must-Have", weight: 10 },
    { name: "Docker", importance: "Must-Have", weight: 10 },
    { name: "Vector Databases (Pinecone/Milvus)", importance: "Nice-to-Have", weight: 5 },
    { name: "Kubernetes (K8s)", importance: "Nice-to-Have", weight: 5 }
  ]
};

export const SAMPLE_JOBS_LIST = [
  {
    id: "job-ai-lead",
    title: "Senior AI Application Engineer",
    company: "Apex Cognitive Systems",
    location: "San Francisco, CA / Remote",
    matchScore: 84,
    skillsScore: 86,
    experienceScore: 85,
    projectsScore: 80,
    tags: ["Full-Time", "Remote", "AI/ML", "$170k - $195k"]
  },
  {
    id: "job-ml-platform",
    title: "Full-Stack ML Platform Engineer",
    company: "Synthetix Cloud",
    location: "New York, NY / Hybrid",
    matchScore: 78,
    skillsScore: 80,
    experienceScore: 82,
    projectsScore: 72,
    tags: ["Full-Time", "Hybrid", "Cloud Infra", "$160k - $185k"]
  },
  {
    id: "job-lead-fs",
    title: "Tech Lead - Enterprise SaaS Solutions",
    company: "Vanguard Software",
    location: "Austin, TX / Remote",
    matchScore: 74,
    skillsScore: 79,
    experienceScore: 80,
    projectsScore: 65,
    tags: ["Full-Time", "Remote", "Enterprise", "$155k - $175k"]
  },
  {
    id: "job-systems-eng",
    title: "AI Systems & Retrieval Architect",
    company: "DataStream Labs",
    location: "Seattle, WA / Remote",
    matchScore: 69,
    skillsScore: 71,
    experienceScore: 75,
    projectsScore: 62,
    tags: ["Full-Time", "Remote", "R&D", "$175k - $210k"]
  }
];

// Hand-written catalog of 30+ skills mapped to vetted platforms
export const SKILLS_LEARNING_CATALOG = {
  "Vector Databases (Pinecone/Milvus)": {
    category: "AI/ML",
    whyItMatters: "High-scale retrieval requires specialized indexing (HNSW, IVF-PQ) to maintain sub-50ms search latency across millions of embeddings.",
    topics: ["HNSW vs Flat Indexing", "Metadata Filtering", "Namespaces & Partitioning", "Hybrid Dense/Sparse Search (BM25 + Dense)"],
    platforms: [
      { name: "Pinecone Official Docs & University", type: "Free Official", url: "https://www.pinecone.io/learn/" },
      { name: "freeCodeCamp: Vector DB Crash Course", type: "Free Community", url: "https://www.youtube.com/results?search_query=freecodecamp+vector+database" },
      { name: "DeepLearning.AI (Coursera)", type: "Freemium / Audit", url: "https://www.coursera.org/search?query=vector+databases" }
    ],
    proofProject: "Build a multi-modal semantic document search with Pinecone and FastAPI, filtering results by document date and security permissions.",
    estimatedHours: 8,
    matchGain: 7,
    pricingNote: "Free tier available on Pinecone; check current API pricing"
  },
  "Kubernetes (K8s)": {
    category: "DevOps",
    whyItMatters: "Production AI systems require horizontal pod autoscaling when inference workloads spike, paired with automated rollouts.",
    topics: ["Pods, Deployments & Services", "Ingress Controllers & Certs", "ConfigMaps & Secrets", "HPA (Horizontal Pod Autoscaler) on CPU/GPU metrics"],
    platforms: [
      { name: "Kubernetes Official Interactive Tutorials", type: "Free Official", url: "https://kubernetes.io/docs/tutorials/" },
      { name: "Microsoft Learn: Introduction to Kubernetes", type: "Free Official", url: "https://learn.microsoft.com/en-us/training/modules/intro-to-kubernetes/" },
      { name: "freeCodeCamp: Docker & Kubernetes Full Course", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+kubernetes+course" }
    ],
    proofProject: "Deploy a resilient 3-replica Node.js + Redis service using Minikube or K3s with declarative YAML manifests and health readiness probes.",
    estimatedHours: 12,
    matchGain: 6,
    pricingNote: "100% free with local Minikube / K3s; check cloud provider cluster management fees"
  },
  "RAG & LLM Pipelines": {
    category: "AI/ML",
    whyItMatters: "Modern generative applications rely on reliable context retrieval to eliminate hallucinations and adhere to company data boundaries.",
    topics: ["Recursive Text Chunking", "Semantic vs Keyword Retrieval", "Reranking with Cross-Encoders", "Evaluation Metrics (RAGAS / TruLens)"],
    platforms: [
      { name: "LangChain & LlamaIndex Official Guides", type: "Free Official", url: "https://docs.llamaindex.ai/en/stable/" },
      { name: "Kaggle Learn: LLM & Embedding Workflows", type: "Free Hands-on", url: "https://www.kaggle.com/learn" },
      { name: "freeCodeCamp: Full Stack RAG with Python", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+rag+tutorial" }
    ],
    proofProject: "Build an evaluation suite that tests 50 tricky queries and outputs faithfulness and answer relevance scores using Ragas.",
    estimatedHours: 10,
    matchGain: 8,
    pricingNote: "Open-source frameworks are free; check OpenAI/Anthropic token pricing for inference"
  },
  "FastAPI": {
    category: "Backend",
    whyItMatters: "Standard microframework for Python AI services thanks to native async, automatic OpenAPI docs, and Pydantic validation.",
    topics: ["Async/Await Request Handlers", "Pydantic V2 Schemas", "Dependency Injection Patterns", "Streaming Responses for LLMs"],
    platforms: [
      { name: "FastAPI Official Documentation & Tutorial", type: "Free Official", url: "https://fastapi.tiangolo.com/tutorial/" },
      { name: "freeCodeCamp: Python FastAPI Full Course", type: "Free Video", url: "https://www.youtube.com/results?search_query=fastapi+full+course+freecodecamp" },
      { name: "Coursera: Building APIs with FastAPI", type: "Audit Free", url: "https://www.coursera.org/search?query=fastapi" }
    ],
    proofProject: "Create a streaming token API with Server-Sent Events (SSE) that handles model timeouts and graceful client disconnections.",
    estimatedHours: 6,
    matchGain: 5,
    pricingNote: "100% free open-source software"
  },
  "TypeScript": {
    category: "Language",
    whyItMatters: "Prevents runtime bugs in complex enterprise state management and guarantees contract safety between frontend and backend APIs.",
    topics: ["Generics & Conditional Types", "Discriminated Unions", "Type Narrowing & Guards", "Zod Schema Inference"],
    platforms: [
      { name: "TypeScript Official Handbook", type: "Free Official", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { name: "Total TypeScript by Matt Pocock", type: "Free Interactive", url: "https://www.totaltypescript.com/tutorials" },
      { name: "freeCodeCamp: TypeScript Course for Beginners", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+typescript" }
    ],
    proofProject: "Refactor an untyped API response parser into a strictly validated Zod parser with custom branded types for User IDs.",
    estimatedHours: 8,
    matchGain: 6,
    pricingNote: "Free and open-source"
  },
  "PostgreSQL & pgvector": {
    category: "Database",
    whyItMatters: "Allows relational business data and vector embeddings to coexist in a single atomic ACID database without maintaining multiple systems.",
    topics: ["Vector Column Types & Indexes", "Cosine vs Inner Product Distance", "EXPLAIN ANALYZE on Vector Queries", "Connection Pooling with PgBouncer"],
    platforms: [
      { name: "pgvector Official GitHub & Guides", type: "Free Official", url: "https://github.com/pgvector/pgvector" },
      { name: "Supabase Vector Documentation", type: "Free Interactive", url: "https://supabase.com/docs/guides/ai" },
      { name: "PostgreSQL Official Documentation", type: "Free Official", url: "https://www.postgresql.org/docs/" }
    ],
    proofProject: "Benchmark search query latency between HNSW index and sequential scan on 100,000 embedded documents.",
    estimatedHours: 7,
    matchGain: 5,
    pricingNote: "Open source; check managed PostgreSQL pricing"
  },
  "Docker": {
    category: "DevOps",
    whyItMatters: "Guarantees identical runtime environments across local development, CI test runners, and production cloud clusters.",
    topics: ["Multi-Stage Builds for Minimal Images", "Layer Caching Strategies", "Docker Compose Multi-Container Stacks", "Rootless Security Best Practices"],
    platforms: [
      { name: "Docker Official Get Started Guides", type: "Free Official", url: "https://docs.docker.com/get-started/" },
      { name: "Microsoft Learn: Containerize Apps with Docker", type: "Free Official", url: "https://learn.microsoft.com/en-us/training/paths/intro-to-docker-containers/" },
      { name: "freeCodeCamp: Docker Handbook", type: "Free Reading", url: "https://www.freecodecamp.org/news/the-docker-handbook/" }
    ],
    proofProject: "Create a multi-stage Dockerfile that shrinks a Python AI image from 1.2GB down to 180MB while maintaining security user permissions.",
    estimatedHours: 5,
    matchGain: 4,
    pricingNote: "Free for individual and personal open-source use"
  },
  "React": {
    category: "Frontend",
    whyItMatters: "De facto standard for rich, responsive user interfaces and enterprise web dashboards.",
    topics: ["React 19 Hooks & Server Actions", "Concurrent Mode & Transitions", "Custom Hooks Architecture", "Performance Profiling with DevTools"],
    platforms: [
      { name: "React Official Docs (react.dev)", type: "Free Official", url: "https://react.dev/learn" },
      { name: "freeCodeCamp: Modern React Full Course", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+react+full+course" },
      { name: "Scrimba: Learn React Interactively", type: "Interactive", url: "https://scrimba.com/learn/learnreact" }
    ],
    proofProject: "Build an optimistic UI chat interface with streaming message markdown rendering and smooth auto-scroll cancellation.",
    estimatedHours: 8,
    matchGain: 5,
    pricingNote: "Free open-source"
  },
  "AWS (ECS/S3/Lambda)": {
    category: "Cloud",
    whyItMatters: "Scalable hosting backbone for serverless events, object storage, and container task orchestration.",
    topics: ["S3 Pre-Signed Upload URLs", "Lambda Execution Context & Cold Starts", "ECS Fargate Task Definitions", "IAM Least-Privilege Policies"],
    platforms: [
      { name: "AWS Skill Builder: Cloud Foundations", type: "Free Official", url: "https://explore.skillbuilder.aws/" },
      { name: "freeCodeCamp: AWS Certified Cloud Practitioner", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+aws+practitioner" },
      { name: "Coursera: AWS Fundamentals Specialization", type: "Audit Free", url: "https://www.coursera.org/search?query=aws+fundamentals" }
    ],
    proofProject: "Deploy an automated S3 file-processing pipeline that triggers an AWS Lambda to extract text metadata into a database.",
    estimatedHours: 9,
    matchGain: 5,
    pricingNote: "AWS Free Tier eligible for 12 months; check resource usage caps"
  },
  "Tailwind CSS": {
    category: "Frontend",
    whyItMatters: "Utility-first design architecture for rapid UI prototyping, maintainable design systems, and zero unused CSS bundles.",
    topics: ["Design Tokens & Theme Customization", "Responsive Breakpoints & Dark Mode", "Arbitrary Variants & Group Hover", "Transitions & Keyframe Animations"],
    platforms: [
      { name: "Tailwind CSS Official Documentation", type: "Free Official", url: "https://tailwindcss.com/docs" },
      { name: "freeCodeCamp: Tailwind CSS Crash Course", type: "Free Video", url: "https://www.youtube.com/results?search_query=freecodecamp+tailwind+css" }
    ],
    proofProject: "Design an accessible, responsive data table with sticky headers, sort indicators, and mobile card transformation.",
    estimatedHours: 4,
    matchGain: 3,
    pricingNote: "100% free open-source"
  }
};

// Explainable deterministic match scoring calculation
export function calculateMatchScore(resume, job, addedSkills = [], addedCertifications = []) {
  const allUserSkillNames = new Set([
    ...resume.skills.map(s => s.name.toLowerCase()),
    ...addedSkills.map(s => s.toLowerCase())
  ]);

  let totalWeight = 0;
  let earnedWeight = 0;
  const matched = [];
  const missing = [];
  const weak = [];

  job.requiredSkills.forEach(req => {
    totalWeight += req.weight;
    const reqLower = req.name.toLowerCase();
    const foundSkill = resume.skills.find(s => s.name.toLowerCase() === reqLower);
    const isAdded = addedSkills.some(s => s.toLowerCase() === reqLower);

    if (isAdded) {
      earnedWeight += req.weight;
      matched.push({ name: req.name, status: "Added (Simulated)", weight: req.weight });
    } else if (foundSkill) {
      if (foundSkill.level === "Proven") {
        earnedWeight += req.weight * 1.0;
        matched.push({ name: req.name, status: "Proven", weight: req.weight });
      } else if (foundSkill.level === "Demonstrated") {
        earnedWeight += req.weight * 0.8;
        matched.push({ name: req.name, status: "Demonstrated", weight: req.weight });
      } else {
        earnedWeight += req.weight * 0.45;
        weak.push({ name: req.name, status: "Weak Evidence", weight: req.weight });
      }
    } else {
      missing.push({ name: req.name, importance: req.importance, weight: req.weight });
    }
  });

  const skillsScore = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 75;
  
  // Experience calculation based on seniority and duration
  const totalYears = resume.experience.reduce((sum, e) => {
    const match = e.duration.match(/(\d+(\.\d+)?)\s*yr/);
    return sum + (match ? parseFloat(match[1]) : 2);
  }, 0);
  const experienceScore = Math.min(95, Math.round((totalYears / 5) * 85));

  // Project relevancy score
  const certBonus = addedCertifications.length * 4;
  const projectsScore = Math.min(98, 80 + certBonus);

  // Overall explainable weighted composite
  // 50% Skills, 25% Experience, 25% Projects
  const overallScore = Math.min(99, Math.round(
    skillsScore * 0.50 +
    experienceScore * 0.25 +
    projectsScore * 0.25
  ));

  return {
    overallScore,
    skillsScore,
    experienceScore,
    projectsScore,
    matched,
    missing,
    weak,
    provenCount: resume.skills.filter(s => s.level === "Proven").length,
    gapsCount: missing.length + weak.length
  };
}
