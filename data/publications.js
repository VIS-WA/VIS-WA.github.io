/* ============================================================
   data/publications.js  —  edit your publications here, newest first.
   Each item:
     {
       year:    2024,
       venue:   "ACM MobiCom '24",            // short tag shown as a chip
       title:   "Paper title",
       authors: "Full author list",           // your name is auto-highlighted
       links:   [ { label: "DOI", href: "…" }, … ]   // shown as buttons
     }
   SITE_ME is the name highlighted in every author list — keep it spelled
   exactly as it appears in `authors`.
   ============================================================ */
window.SITE_ME = "Savitha Viswanadh Kandala";

window.SITE_PUBLICATIONS = [
  {
    year: 2024,
    venue: "arXiv · Preprint",
    title: "TinyLLM: A Framework for Training and Deploying Language Models at the Edge Computers",
    authors: "Savitha Viswanadh Kandala, Pramuka Medaranga, and Ambuj Varshney",
    links: [
      { label: "ARXIV",   href: "https://arxiv.org/abs/2412.15304" },
      { label: "WEBSITE", href: "https://tinyllm.org/" },
      { label: "CODE",    href: "https://github.com/weiserlab/TinyLLM" }
    ]
  },
  {
    year: 2024,
    venue: "ACM MobiCom '24",
    title: "A Framework for Training and Deploying Foundational Language Models for Embedded Sensing",
    authors: "Savitha Viswanadh Kandala, and Ambuj Varshney",
    links: [
      { label: "DOI", href: "https://doi.org/10.1145/3636534.3695901" },
      { label: "ABS", href: "https://dl.acm.org/doi/10.1145/3636534.3697466" }
    ]
  },
  {
    year: 2025,
    venue: "IEEE Access",
    title: "Engineering End-to-End Remote Labs Using IoT-Based Retrofitting",
    authors: "Savitha Viswanadh Kandala, Akshit Gureja, Nagesh Walchatwar, and 8 more authors",
    links: [
      { label: "DOI",  href: "https://doi.org/10.1109/ACCESS.2024.3523066" },
      { label: "BLOG", href: "https://blogs.iiit.ac.in/rtl/" }
    ]
  }
];
