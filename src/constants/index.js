const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Oct 18, 2022",
    title:
      "Book: Don't Believe Everything You Think by Joseph Nguyen",
    image: "/images/DBIEYT.jpg",
    link: "https://www.goodreads.com/book/show/60726415-don-t-believe-everything-you-think",
  },
  {
    id: 2,
    date: "1965",
    title: "Song: Like a Rolling Stone by Bob Dylan",
    image: "/images/RS.jpg",
    link: "https://www.youtube.com/watch?v=IwOfCgkyEj0&list=RDIwOfCgkyEj0&start_radio=1",
  },
  {
    id: 3,
    date: "1992",
    title: "Movie: Home Alone 2: Lost in New York",
    image: "/images/HA.png",
    link: "https://www.youtube.com/watch?v=eYnHHtVKwi4",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    category: "Languages",
    items: ["Python", "C", "Java"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FAST API"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Shreeyans2305",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/ShreeyansV/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://twitter.com/MelonTrillon",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://in.linkedin.com/in/shreeyans-vichare",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/shrey.JPG",
  },
  {
    id: 2,
    img: "/images/ex-1.JPG",
  },
  {
    id: 3,
    img: "/images/ex-2.jpg",
  },
  {
    id: 4,
    img: "/images/shrey-3.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Jersey Store .NET Forms Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[4vh] left-0", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "FrontierSports.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Frontier Sports is a C#.NET Windows Forms application built as part of an Event Driven Programming course.",
            "It simulates an interactive online sports jersey store with user login, account creation, and session-based cart management.",
            "Users can browse jerseys by brand or sport through a clean, image-rich interface.",
            "The app also includes order history and a mock payment review system backed by a SQL database.",
          ],
        },
        {
          id: 2,
          name: "FrontierSportsGithubRepo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Shreeyans2305/JerseyStore",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "frontiersports1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-100",
          imageUrl: "/images/p11.png",
        },
        {
          id: 4,
          name: "frontiersports2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-62 right-75",
          imageUrl: "/images/p12.png",
        },
        {
          id: 5,
          name: "frontiersports3.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-50",
          imageUrl: "/images/p13.png",
        },
        {
          id: 6,
          name: "frontiersports4.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-62 right-25",
          imageUrl: "/images/p14.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Stock Market Simulator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[22vh] left-4",
      children: [
        {
          id: 1,
          name: "CLIStockMarketSimInC.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This C-based simulator lets users create profiles and trade 20 global and Indian stocks in a virtual market.",
            "A randomized engine simulates market days, fluctuating prices based on profit and loss percentages.",
            "Users can buy, sell, deposit, and withdraw funds using a secure 4-digit PIN system.",
            "The portfolio feature tracks current holdings, past prices, and total asset value in real-time.",
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Shreeyans2305/Stock-Market-Simulator",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "1st Hackathon!!",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[37vh] left-5",
      children: [
        {
          id: 1,
          name: "WeAware.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Proud to share that our team Smooth Operators reached the finals of Ignite IT 7.0 in our very first hackathon.",
            " We built WeAware, an AI-powered platform that predicts citywide trends and potential events to keep communities safer.",
            "The project features real-time calamity maps, location-based news, and AI-driven insights.",
            "Built with React, NLP, and a data-driven backend, this journey was intense, rewarding, and unforgettable.",
          ],
        },
        {
          id: 2,
          name: "LinkedIn Post",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.linkedin.com/posts/shreeyans-vichare_firsthackathon-hackathonfinalists-weaware-activity-7379144688332611584-EO_m?utm_source=share&utm_medium=member_ios&rcm=ACoAAFRDcTkBwhp56zovGPGj7hZ_ZpVWvifJmK8",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "we-aware.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 right-80",
          imageUrl: "/images/h1.jpg",
        },
        {
          id: 4,
          name: "smooth-operators.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-56 right-40",
          imageUrl: "/images/h2.jpg",
        },
        {
          id: 5,
          name: "certificate.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-47 right-10",
          imageUrl: "/images/h3.jpg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/shrey.JPG",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual.JPG",
    },
    {
      id: 3,
      name: "me-poster.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/poster.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/shrey-2.jpg",
      description: [
        "I’m Shreeyans Vichare, a self-taught developer driven by curiosity and impact.",
        "I build things at the intersection of Python, machine learning, and web development—turning ideas into real projects.",
        "From algorithms to AI, I’m always learning, collaborating, and chasing the belief that meaningful change can start from a tiny screen.",
        "Outside of code, you'll probably find me playing chess, writing, walking or staring at the night sky.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "misc1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/u1.png",
    },
    {
      id: 2,
      name: "misc2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/u2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };