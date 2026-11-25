import nowData from './now.json'

/**
 * Single source of truth for all copy, chapters, projects, and stickers.
 * Edit the text here without touching any React component.
 */
export const CONTENT = {
  meta: {
    name: 'Mukesh Kumar Chaurasia',
    shortName: 'Mukesh',
    roleLine: 'Final-year B.Tech CSE student at LPU • Aspiring AI/ML Engineer & Data Analyst',
    email: 'mukesh20072005@gmail.com',
    github: 'https://github.com/Mukxsh20',
    linkedin: 'https://linkedin.com/in/Mukxsh/',
    resumeUrl: '/resume.pdf',
    photoUrl: '/profile.jpg',
    photoAlt: 'Mukesh Kumar Chaurasia smiling in a casual portrait',
    polaroidCaption: 'me, probably debugging a dataframe — Nov 2026',
  },

  nav: [
    { id: 'intro', label: 'Intro' },
    { id: 'story', label: 'My story' },
    { id: 'projects', label: 'Things built' },
    { id: 'tools', label: 'Tools' },
    { id: 'how-i-work', label: 'How I work' },
    { id: 'proof', label: 'Proof' },
    { id: 'now', label: 'Right now' },
    { id: 'say-hi', label: 'Say hi' },
  ],

  intro: {
    handwrittenNote: 'p. 01 — open to good data problems',
    greeting: "Hey, I'm Mukesh.",
    highlightWord: 'Mukesh.',
    lead: "I'm a final-year B.Tech CSE student at Lovely Professional University, trying to turn messy spreadsheets and half-clean datasets into models and dashboards that actually help someone make a call.",
    rightNowLine: `Right now: ${nowData.currentlyInto}`,
    primaryCta: 'Read my story',
    secondaryCta: 'Skip to my work',
    funFacts: [
      'I once spent 40 minutes tuning an SVM before noticing two date columns were swapped.',
      'Solving Codeforces problems at 1 AM taught me more about calm debugging than any lecture.',
      'My browser always has 3 tabs open: Pandas docs, a Kaggle notebook, and a chai timer.',
      'I still write down SQL joins on paper before typing them out.',
    ],
  },

  story: {
    chapterLabel: 'Chapter 01',
    title: 'How I got here',
    subtitle: 'Not a straight line — mostly curiosity, a few late nights, and learning what breaks.',
    entries: [
      {
        id: 'school',
        date: '2020 – 2023',
        doodle: 'book',
        title: 'School days in Sangrur',
        text: 'Finished Matriculation (92%) and Intermediate (82%) at Holy Heart Convent School, Sangrur. That is where I realized I liked solving logic puzzles way more than memorizing definitions.',
      },
      {
        id: 'lpu',
        date: 'Aug 2023',
        doodle: 'compass',
        title: 'Started B.Tech CSE at LPU',
        text: 'Moved to Lovely Professional University for Computer Science and Engineering. Everything felt huge at first — too many tracks, too many opinions — so I started writing small scripts just to see what stuck.',
      },
      {
        id: 'python-course',
        date: 'Feb 2025',
        doodle: 'snake',
        title: 'My first structured Python course',
        text: "Took Google's Crash Course on Python to stop guessing syntax and actually understand data structures and automation. Suddenly reading CSV files didn't feel intimidating anymore.",
      },
      {
        id: 'cp-dsa',
        date: 'May – Jun 2025',
        doodle: 'puzzle',
        title: 'Fell into competitive programming',
        text: 'Did an intensive C++ DSA training and got hooked on timed contests. Reached Pupil on Codeforces and crossed 300+ problems on LeetCode — mostly by failing test case #14 and figuring out why.',
      },
      {
        id: 'sew-ai',
        date: 'Jun – Jul 2025',
        doodle: 'chart',
        title: 'Junior Data Analyst Intern at SEW.ai',
        text: 'My first taste of real-world data that was not clean like a classroom dataset. Cleaned raw tables in Pandas and NumPy, ran EDA, built Excel and Power BI dashboards for sales and customer KPIs, and presented findings with senior analysts.',
      },
      {
        id: 'ml-projects',
        date: 'Aug 2025 – Present',
        doodle: 'spark',
        title: 'Building ML systems end-to-end',
        text: 'Stopped keeping models trapped inside Jupyter notebooks. Built Fraudic to compare imbalanced fraud metrics, Smart Hiring with an 89%+ pipeline wrapped in a Tkinter app, and started exploring RAG with LangChain.',
      },
    ],
  },

  projects: {
    chapterLabel: 'Chapter 02',
    title: "Things I've built (and what they taught me)",
    subtitle: 'Each project sits on its own notebook page — including the part where I messed up first.',
    items: [
      {
        id: 'smart-hiring',
        pageNumber: 'Page 14',
        date: 'Nov – Dec 2025',
        category: 'ML',
        featured: true,
        title: 'Smart Hiring',
        whatItIs:
          'An end-to-end ML system that predicts candidate shortlisting outcomes and runs inside a simple desktop Tkinter app.',
        whyIBuiltIt:
          'Most student ML projects stop at a notebook cell. I wanted to see what happens when you serialize a real pipeline with Joblib and put a UI in front of it.',
        whatIGotWrong:
          'At first I scaled features on the full dataset before splitting train and test — classic data leakage. Fixing it with a proper Scikit-learn pipeline dropped my fake score slightly and gave me an honest 89%+.',
        result: '89%+ accuracy comparing Logistic Regression, Decision Tree & SVM (evaluated via Accuracy, RMSE & F1) + working Tkinter inference app.',
        stamps: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Joblib', 'Tkinter', 'Seaborn'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
      {
        id: 'fraudic',
        pageNumber: 'Page 19',
        date: 'Aug – Sep 2025',
        category: 'ML',
        featured: true,
        title: 'Fraudic',
        whatItIs:
          'A supervised fraud detection benchmark comparing four classifiers on highly imbalanced transaction data.',
        whyIBuiltIt:
          'I wanted to break the habit of trusting "99% accuracy" when 99% of rows are non-fraud.',
        whatIGotWrong:
          'My first Naive Bayes run looked decent on overall accuracy until I plotted the confusion matrix in Seaborn and saw it was missing actual fraud cases. Switching focus to Recall and F1 changed everything.',
        result: 'Benchmarked Logistic Regression, Decision Tree, SVM, and Naive Bayes side-by-side on Accuracy, Precision, Recall, and F1-score.',
        stamps: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
      {
        id: 'sales-analytics',
        pageNumber: 'Page 23',
        date: 'Nov – Dec 2025',
        category: 'Data',
        featured: true,
        title: 'Sales Analytics Dashboard',
        whatItIs:
          'An interactive Power BI dashboard tracking revenue, order volume, outlet performance, and customer ratings.',
        whyIBuiltIt:
          'After my SEW.ai internship, I wanted a clean standalone BI project focused on business questions rather than flashy visuals.',
        whatIGotWrong:
          'Version one tried to cram 11 visuals onto one screen. Nobody knew where to look. Splitting KPIs into clear drill-down filters and clean DAX measures made the numbers speak for themselves.',
        result: 'Multi-view executive Power BI report with dynamic slicers, custom DAX KPIs, and outlet-level drill-downs.',
        stamps: ['Power BI', 'DAX', 'Excel'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
      {
        id: 'crypto-direction',
        pageNumber: 'Page 27',
        date: '2025',
        category: 'ML',
        featured: false,
        title: 'Crypto Price Direction Predictor',
        whatItIs:
          'A Streamlit app that turns short-term OHLCV crypto indicators into simple up/down directional predictions.',
        whyIBuiltIt:
          'To test how noisy financial time-series behave when you engineer rolling averages and momentum features.',
        whatIGotWrong:
          'Shuffling time-series rows during cross-validation made the model look like a genius until I switched to chronological splits. Lesson learned: never shuffle time.',
        result: 'Interactive Streamlit dashboard displaying rolling RSI/MA features and directional classifier confidence.',
        stamps: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
      {
        id: 'kisansetu',
        pageNumber: 'Page 31',
        date: '2026',
        category: 'ML',
        featured: false,
        title: 'KisanSetu (SIH 2026)',
        whatItIs:
          'An AI-assisted farmer advisory prototype grounding answers in agricultural documents using RAG.',
        whyIBuiltIt:
          'Built for Smart India Hackathon prep because generic chatbots hallucinate crop dosages when left ungrounded.',
        whatIGotWrong:
          'Chunking documents blindly at 500 characters cut pesticide tables in half. Switching to section-aware chunks fixed retrieval quality right away.',
        result: 'Working RAG advisory prototype combining vector embeddings with regional crop context.',
        stamps: ['Python', 'LangChain', 'RAG', 'Embeddings'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
      {
        id: 'train-delay',
        pageNumber: 'Page 35',
        date: '2025',
        category: 'Data',
        featured: false,
        title: 'Train Delay Prediction',
        whatItIs:
          'A PySpark pipeline modeling railway arrival delays across route congestion and schedule logs.',
        whyIBuiltIt:
          'Wanted hands-on practice outside single-machine Pandas by processing larger schedule logs with Spark DataFrames.',
        whatIGotWrong:
          'Used collect() too early during debugging and choked memory on a large join. Learned to inspect with .show(10) and aggregate inside Spark first.',
        result: 'Scalable Spark SQL feature transformations feeding a delay prediction pipeline.',
        stamps: ['PySpark', 'Python', 'SQL', 'Scikit-learn'],
        githubUrl: 'https://github.com/Mukxsh20',
        liveUrl: '',
      },
    ],
  },

  tools: {
    chapterLabel: 'Chapter 03',
    title: 'Tools I reach for',
    subtitle: 'No made-up "87% Python" progress bars here. Hover or tap any sticker to see what I actually use it for.',
    groups: [
      {
        id: 'data-ml',
        label: 'Data & ML bench',
        color: 'yellow',
        stickers: [
          { name: 'Pandas', note: 'Where I spend 70% of my time cleaning messy CSVs.', rot: -2 },
          { name: 'NumPy', note: 'For fast array math when loops feel too slow.', rot: 1.5 },
          { name: 'Scikit-learn', note: 'My default toolkit for baselines, pipelines, and metrics.', rot: -1 },
          { name: 'Matplotlib', note: 'Ugly first drafts of plots that help me spot outliers.', rot: 2 },
          { name: 'Seaborn', note: 'Heatmaps and distributions I can actually show someone.', rot: -1.5 },
        ],
      },
      {
        id: 'languages',
        label: 'Languages',
        color: 'cream',
        stickers: [
          { name: 'Python', note: 'My everyday driver for data, ML, and quick scripts.', rot: 1 },
          { name: 'SQL', note: 'How I slice tables before touching a notebook.', rot: -2 },
          { name: 'C++', note: 'Strictly for DSA, Codeforces, and thinking about speed.', rot: 2 },
          { name: 'C', note: 'Where I learned pointers the hard way in first year.', rot: -1 },
        ],
      },
      {
        id: 'genai',
        label: 'GenAI & LLM corner',
        color: 'terracotta',
        stickers: [
          { name: 'LLMs', note: 'Useful when grounded — dangerous when trusted blindly.', rot: -1.5 },
          { name: 'RAG', note: 'Making models read my documents before answering.', rot: 2 },
          { name: 'LangChain', note: 'Handy glue for chaining retrievers and prompts.', rot: -1 },
          { name: 'Prompt Engineering', note: 'Half writing clear specs, half testing edge cases.', rot: 1.5 },
          { name: 'Embeddings', note: 'Turning sentences into coordinates so search gets meaning.', rot: -2 },
          { name: 'Vector Databases', note: 'Fast nearest-neighbor lookup for RAG chunks.', rot: 1 },
        ],
      },
      {
        id: 'bi-db',
        label: 'BI, DBs & daily gear',
        color: 'sage',
        stickers: [
          { name: 'Power BI', note: 'Where raw numbers become dashboards managers click.', rot: 1.5 },
          { name: 'Excel', note: 'Never underestimate a quick pivot table sanity check.', rot: -2 },
          { name: 'MySQL', note: 'Structured schemas, joins, and clean relational data.', rot: 1 },
          { name: 'MongoDB', note: 'When JSON documents refuse to fit neat rows.', rot: -1.5 },
          { name: 'SQLite', note: 'Zero-setup database for local prototypes.', rot: 2 },
          { name: 'Git & GitHub', note: 'Saving myself from "final_v3_really_final.py".', rot: -1 },
        ],
      },
    ],
  },

  howIWork: {
    chapterLabel: 'Chapter 04',
    title: 'How I work',
    subtitle: 'Four simple habits I try to stick to on every dataset and codebase.',
    cards: [
      {
        id: 'read-data',
        number: '01',
        title: 'I read the data before I touch a model',
        body: 'Half of ML bugs are hiding in null values, weird units, or duplicate rows. Checking df.info() and plotting distributions saves hours later.',
        rot: -1.2,
      },
      {
        id: 'ship-simple',
        number: '02',
        title: "I'd rather ship simple and improve it",
        body: 'A working Logistic Regression baseline with clean validation beats an unfinished deep learning idea stuck on slide 4.',
        rot: 1,
      },
      {
        id: 'ask-early',
        number: '03',
        title: 'I ask questions early',
        body: 'At SEW.ai I learned that spending 10 minutes clarifying what a KPI actually means to a stakeholder beats guessing for two days.',
        rot: -0.8,
      },
      {
        id: 'keep-notes',
        number: '04',
        title: 'I write down what broke',
        body: 'Every data leakage bug, bad SQL join, or failed Codeforces submission goes into my notes so I only pay that tuition once.',
        rot: 1.3,
      },
    ],
  },

  proof: {
    chapterLabel: 'Chapter 05',
    title: 'Proof I keep showing up',
    subtitle: 'Ticket stubs and passport stamps from contests, coursework, and certificates.',
    tickets: [
      {
        id: 'leetcode',
        stubCode: 'DSA-300+',
        title: '300+ Problems Solved',
        org: 'LeetCode & Coding Platforms',
        date: 'Ongoing',
        note: 'Arrays, trees, graphs, DP — one stubborn edge case at a time.',
      },
      {
        id: 'codeforces',
        stubCode: 'CF-PUPIL',
        title: 'Pupil Rank',
        org: 'Codeforces',
        date: 'Active',
        note: 'Timed C++ contests that trained me to stay calm under a ticking clock.',
      },
    ],
    stamps: [
      {
        id: 'infosys',
        title: 'ChatGPT-4 Prompt Engineering',
        issuer: 'Infosys Springboard',
        date: 'Aug 2025',
        tag: 'GENAI STAMP',
        rot: -2,
      },
      {
        id: 'deloitte',
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte',
        date: 'Jul 2025',
        tag: 'ANALYTICS STAMP',
        rot: 1.5,
      },
      {
        id: 'google',
        title: 'Crash Course on Python',
        issuer: 'Google',
        date: 'Feb 2025',
        tag: 'PYTHON STAMP',
        rot: -1,
      },
      {
        id: 'dsa-training',
        title: 'DSA using C++ Intensive Training',
        issuer: 'Summer Training',
        date: 'May – Jun 2025',
        tag: 'C++ / DSA',
        rot: 2,
      },
    ],
  },

  now: {
    chapterLabel: 'Chapter 06',
    title: 'Right now',
    subtitle: 'A /now page — edited from a single JSON file (src/data/now.json).',
    data: nowData,
  },

  sayHi: {
    chapterLabel: 'Chapter 07',
    title: 'Say hi',
    copy: 'Got a project, an internship or just a question? I reply to everything.',
    subcopy: "No pitch needed — even a quick note about a dataset, a project bug, or an opening at your team is welcome.",
  },
}
