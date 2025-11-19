// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-started-summer-internship-as-a-software-developer-with-walmart-global-tech-bangalore-india",
          title: 'Started summer internship as a Software Developer with Walmart Global Tech, Bangalore, India....',
          description: "",
          section: "News",},{id: "news-started-internship-with-the-weiser-group-systems-and-networking-lab-school-of-computing-nus",
          title: 'Started internship with the WEISER group, Systems and Networking Lab, School of Computing,...',
          description: "",
          section: "News",},{id: "news-graduated-from-iiit-hyderabad-with-a-gold-medal-for-best-all-rounder",
          title: 'Graduated from IIIT Hyderabad with a Gold Medal for Best All-Rounder.',
          description: "",
          section: "News",},{id: "news-graduated-from-iiit-hyderabad-with-a-gold-medal-for-best-all-rounder",
          title: 'Graduated from IIIT Hyderabad with a Gold Medal for Best All-Rounder.',
          description: "",
          section: "News",},{id: "news-started-ph-d-in-computer-science-at-the-school-of-computing-nus",
          title: 'Started Ph.D. in Computer Science at the School of Computing, NUS.',
          description: "",
          section: "News",},{id: "news-workshop-paper-accepted-at-acm-s3-workshop-held-in-conjunction-with-mobicom-2024",
          title: 'Workshop paper accepted at ACM S3 Workshop (held in conjunction with MobiCom 2024)....',
          description: "",
          section: "News",},{id: "news-poster-accepted-at-acm-mobicom-2024-title-your-data-your-model-a-framework-for-training-and-deploying-foundational-language-models-on-embedded-devices",
          title: 'Poster accepted at ACM MobiCom 2024. Title: “Your Data, Your Model: A Framework...',
          description: "",
          section: "News",},{id: "news-released-tinyllm-a-framework-for-training-and-deploying-language-models-at-the-edge",
          title: 'Released TinyLLM! A Framework for Training and Deploying Language Models at the Edge...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-at-nus-ai-research-day-part-of-singapore-ai-frontier-week-on-tinyllm",
          title: 'Presented a poster at NUS AI Research Day, part of Singapore AI Frontier...',
          description: "",
          section: "News",},{id: "news-solved-ibm-research-s-ponder-this-november-2025-challenge",
          title: 'Solved IBM Research’s Ponder This November 2025 challenge',
          description: "",
          section: "News",},{id: "projects-tinyllm",
          title: 'TinyLLM',
          description: "A Framework for Training and Deploying Language Models at the Edge",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-rlabs",
          title: 'RLabs',
          description: "Remotely controlled labs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%6E%64%61%6C%61%76%69%73%77%61%6E%61%64%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/VIS-WA", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/savitha-viswanadh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mp949ngAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
