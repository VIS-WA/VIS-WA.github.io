/* ============================================================
   data/posts.js  —  featured posts / press coverage, newest first.
   Each item:
     {
       date:   "YYYY-MM-DD",   // used for ordering + the year shown on the card
       source: "...",          // outlet, shown as a chip
       title:  "...",
       desc:   "...",          // one-line summary (optional)
       href:   "..."           // link to the post
     }
   Rendered into #postsList (same card style as publications).
   ============================================================ */
window.SITE_POSTS = [
  {
    date: "2026-06-05",
    source: "NUS Computing",
    title: "Shrinking AI to Fit the Real World",
    desc: "NUS Computing on TinyLLM and Prof. Ambuj Varshney's 2026 Google Research Award.",
    href: "https://www.comp.nus.edu.sg/bytes/shrinking-ai-to-fit-the-real-world-assistant-ambuj-varshney-receives-2026-google-research-award/"
  },
  {
    date: "2023-07-01",
    source: "IIIT Hyderabad",
    title: "IIIT Hyderabad Celebrates its 22nd Convocation",
    desc: "Graduation coverage from IIIT Hyderabad's 22nd convocation.",
    href: "https://blogs.iiit.ac.in/monthly_news/22nd-convocation/"
  },
  {
    date: "2022-05-02",
    source: "IIIT Hyderabad",
    title: "IIITH's Newest IoT Lab Lets You Conduct Real Science Experiments Remotely",
    desc: "On the Remote Triggered Lab — browser-based control of real experiments over IoT.",
    href: "https://blogs.iiit.ac.in/rtl/"
  }
];
