export const projects = [
  {
    id: 1,
    title: "Career Prep",
    subtitle: "AI-powered career preparation and learning platform.",
    desc: "A full-stack career preparation platform featuring AI-powered learning assistance, exam support, and user management.",
    fullDesc:
      "A full-stack career preparation platform designed to help students with learning and exam preparation. Features include authentication, MCQ interfaces, admin dashboard functionality, and AI tutor integration using Google Gemini, Groq, and OpenRouter APIs. Built with React.js, TypeScript, Node.js, Express.js, and MongoDB.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI Integration",
    ],
    image:
      "https://i.ibb.co.com/BH8cgr6n/Gemini-Generated-Image-24ficl24ficl24fi.jpg",
    githubClient: "https://github.com/Programing360/career-prep-frontend",
    demo: "https://career-prep-frontend-rho.vercel.app/",
    size: "sm",
    accent: "from-blue-600/20 to-violet-500/20",
    status: "Completed",
    mainTechStack: [
      { name: "Frontend", tech: "React.js, TypeScript" },
      { name: "Backend & API", tech: "Node.js, Express.js, REST APIs" },
      { name: "Database", tech: "MongoDB" },
      { name: "Authentication", tech: "JWT, Access & Refresh Tokens" },
      { name: "AI Integration", tech: "Google Gemini, Groq, OpenRouter" },
      { name: "Deployment", tech: "Vercel" },
    ],
    challenges: [
      {
        problem: "AI Provider Failures and API Availability",
        solution:
          "Worked on integrating multiple AI providers, including Gemini, Groq, and OpenRouter, and explored fallback handling to improve AI response reliability.",
      },
      {
        problem: "Secure User Authentication and Protected APIs",
        solution:
          "Worked on JWT-based authentication, access and refresh token handling, and protecting user-specific resources.",
      },
      {
        problem: "Frontend and Backend Integration Issues",
        solution:
          "Debugged API integration issues, updated UI components, and troubleshot environment configuration problems.",
      },
    ],
    futurePlans: [
      "Improve AI provider fallback handling and error management.",
      "Optimize API response times and overall application performance.",
      "Enhance the AI tutor experience for career preparation and learning.",
      "Expand exam management and student progress tracking features.",
    ],
  },
  {
    id: 2,
    title: "Digital Life Lessons",
    subtitle: "Library Management System & E-Learning Portal",
    desc: "Library management system with Next.js & MongoDB.",
    fullDesc:
      "Digital Life Lessons is a comprehensive digital library platform where users can explore, borrow, and manage academic resources and books seamlessly with automated tracking.",
    tags: ["Next.js", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image:
      "https://i.ibb.co.com/B5yFGyhw/Gemini-Generated-Image-h4trc5h4trc5h4tr.png",
    githubClient: "https://github.com/Programing360/digital-live-client",
    demo: "https://digital-live-client.vercel.app",
    size: "lg",
    accent: "from-blue-600/20 to-cyan-500/20",
    status: "Production",
    mainTechStack: [
      { name: "Frontend", tech: "Next.js, React, Tailwind CSS" },
      { name: "Backend", tech: "Node.js, Express.js" },
      { name: "Database", tech: "MongoDB (Mongoose)" },
    ],
    challenges: [
      {
        problem: "Next.js App Router Serverless Connection Overhead",
        solution:
          "Implemented global Mongoose connection caching logic to prevent connection pool exhaustion during serverless function invocations.",
      },
    ],
    futurePlans: [
      "Add Audio-book Streaming Integration.",
      "Implement Student Progress Analytics Dashboard.",
    ],
  },
  {
    id: 3,
    title: "SmartWallet AI",
    subtitle: "AI-driven Personal Finance Manager & Smart Expense Tracker",
    desc: "AI-driven personal finance manager & smart expense tracker.",
    fullDesc:
      "SmartWallet AI is an advanced financial tracking application designed to simplify budget management. By leveraging AI capabilities, it automatically categorizes transactions, detects spending patterns, and provides actionable insights to help users achieve their financial goals effortlessly.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "MongoDB",
      "Redis",
    ],
    image: "https://i.ibb.co.com/LXCyQWnG/design-professional.avif",
    githubClient: "https://github.com/Programing360/smartwallet-frontend",
    demo: "https://smartwallet-frontend.vercel.app",
    size: "sm",
    accent: "from-purple-600/20 to-indigo-500/20",
    status: "Live Active",
    mainTechStack: [
      {
        name: "Frontend Framework",
        tech: "Next.js 14 (App Router), TypeScript",
      },
      { name: "UI & Animations", tech: "Tailwind CSS, HeroUI, Framer Motion" },
      { name: "Backend Services", tech: "Node.js, Express.js" },
      { name: "Database & Cache", tech: "MongoDB, Redis & BullMQ" },
      { name: "AI Integration", tech: "Google Gemini API" },
    ],
    challenges: [
      {
        problem: "AI Response Latency & UI Freezing on Large Statements",
        solution:
          "Decoupled pipeline using an async queue with Redis & BullMQ. Implemented Real-time updates via Server-Sent Events (SSE).",
      },
      {
        problem: "Race Conditions in JWT Refresh Token Rotation",
        solution:
          "Implemented an Axios Interceptor Queue with 'isRefreshing' flag to pause and retry failed requests seamlessly.",
      },
      {
        problem: "MongoDB Aggregation Latency on Analytics Charts",
        solution:
          "Applied Compound Indexing on userId/date fields and restricted early $match stages to optimize memory usage.",
      },
    ],
    futurePlans: [
      "Integrate Multi-currency Support with real-time conversion rates.",
      "Add Automated Recurring Subscription Tracking and alert notifications.",
      "Develop a Mobile Application using React Native to sync seamlessly.",
    ],
  },
  {
    id: 4,
    title: "Fresh Root",
    subtitle: "Modern E-Commerce Platform for Natural & Organic Food Products",
    desc: "E-commerce platform for natural & organic food products.",
    fullDesc:
      "Fresh Root provides health-conscious consumers with pure organic food products such as natural honey, jaggery, ghee, and fresh groceries. Built with speed and responsiveness in mind, it features real-time inventory synchronization, intuitive product filters, and secure checkout integration.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    image:
      "https://i.ibb.co.com/zW2B6GjT/design-professional-website-layout-company-specializing-gold-cryptocurrency-trading-1269188-5041.avif",
    githubClient: "https://github.com/Programing360/fresh-root",
    demo: "https://fresh-root-gilt.vercel.app",
    size: "sm",
    accent: "from-emerald-600/20 to-teal-500/20",
    status: "Live Active",
    mainTechStack: [
      { name: "Frontend Framework", tech: "Next.js (App Router), React" },
      {
        name: "Styling & UI",
        tech: "Tailwind CSS, Framer Motion, Lucide React",
      },
      { name: "Backend API", tech: "Node.js, Express.js" },
      { name: "Database", tech: "MongoDB" },
      { name: "Payment Gateway", tech: "SSLCommerz Integration" },
    ],
    challenges: [
      {
        problem: "Invalid HTML Nesting & Event Bubbling Error",
        solution:
          "Separated Link wrappers from Action buttons and applied e.stopPropagation() to prevent unintended click events.",
      },
      {
        problem: "Handling Out-of-Stock Products & Cart Sync",
        solution:
          "Added conditional UI logic to dynamically disable 'Add to Cart' buttons and display 'OUT OF STOCK' labels.",
      },
      {
        problem: "Next.js Image Optimization Engine Crashes",
        solution:
          "Built a resilient fallback image pipeline using logical OR operators to handle missing database image entries safely.",
      },
    ],
    futurePlans: [
      "Implement AI-based Personalized Product Recommendations.",
      "Add Subscriptions for Monthly Organic Basket Delivery.",
      "Integrate Real-time Order Tracking Map via Socket.io.",
    ],
  },
  {
    id: 5,
    title: "Zeroomiro E-Com",
    subtitle: "Full-stack immersive electronics shopping experience.",
    desc: "Full-stack immersive electronics shopping experience.",
    fullDesc:
      "An immersive e-commerce platform dedicated to gadget enthusiasts, featuring seamless product filtering, secure Firebase authentication, and responsive shopping cart functionalities.",
    tags: ["React", "Node.js", "Express", "Firebase"],
    image: "https://i.ibb.co.com/sv4fZDt4/banner-Mck-Up.png",
    githubClient: "https://github.com/Programing360/gadget-e-commerce-project",
    demo: "https://zeroomiro26.web.app/",
    size: "sm",
    accent: "from-pink-600/20 to-rose-500/20",
    status: "Completed",
    mainTechStack: [
      { name: "Frontend", tech: "React.js, Tailwind CSS" },
      { name: "Authentication", tech: "Firebase Auth" },
      { name: "Backend & DB", tech: "Node.js, Express.js, MongoDB" },
    ],
    challenges: [
      {
        problem: "Heavy Image Assets Slowing Initial Render Speed",
        solution:
          "Integrated Cloudinary CDN with automatic webp conversion and lazy-loading wrappers.",
      },
    ],
    futurePlans: [
      "Implement Multi-vendor Support.",
      "Add User Review and Rating Systems with Image Uploads.",
    ],
  },
];
