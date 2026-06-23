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
          description: "My research focuses on Argument Mining, fallacy detection, and political debate analysis. Publications listed in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-m-thrilled-to-share-that-i-have-successfully-defended-my-master-s-thesis-leveraging-structural-knowledge-for-argument-mining-in-political-debates-at-sapienza-università-di-roma-earning-a-final-mark-of-110-110-cum-laude",
          title: '🎓 I’m thrilled to share that I have successfully defended my Master’s thesis...',
          description: "",
          section: "News",},{id: "news-i-started-my-phd-at-the-université-côte-d-azur-my-work-will-focus-on-argument-mining-on-political-debates-this-research-is-supported-by-the-3ia-côte-d-azur",
          title: '🎓 I started my PhD at the Université Côte d’Azur! My work will...',
          description: "",
          section: "News",},{id: "news-a-new-chapter-begins-we-ve-officially-branched-out-from-wimmics-to-form-marianne-a-new-research-group-dedicated-to-argument-mining-political-debates-and-misinformation",
          title: '🚀 A new chapter begins! We’ve officially branched out from WIMMICS to form...',
          description: "",
          section: "News",},{id: "news-our-paper-repairing-fallacious-argumentation-in-political-debates-pierpaolo-goffredo-deborah-dore-elena-cabrio-serena-villata-has-been-accepted-to-eca-2025-in-this-work-we-explore-how-to-identify-and-correct-fallacies-in-political-debates-using-computational-approaches-a-step-toward-improving-the-quality-of-public-debate",
          title: '📢 Our paper “Repairing Fallacious Argumentation in Political Debates” (Pierpaolo Goffredo, Deborah Dore,...',
          description: "",
          section: "News",},{id: "news-our-paper-disputool-3-0-fallacy-detection-and-repairing-in-argumentative-political-debates-pierpaolo-goffredo-deborah-dore-elena-cabrio-serena-villata-has-been-accepted-to-acl-2025-s-demo-track-disputool-3-0-is-a-web-based-tool-that-detects-and-repairs-fallacious-arguments-in-political-debates-built-on-a-collection-of-u-s-presidential-debates-from-1960-to-2020-disputool-goes-beyond-detection-by-suggesting-revised-fallacy-free-versions-of-flawed-arguments",
          title: '📢 Our paper “DISPUTool 3.0: Fallacy Detection and Repairing in Argumentative Political Debates”...',
          description: "",
          section: "News",},{id: "news-my-master-s-thesis-work-leveraging-graph-structural-knowledge-to-improve-argument-relation-prediction-in-political-debates-deborah-dore-stefano-faralli-serena-villata-has-been-accepted-at-the-argument-mining-workshop-at-acl-2025-in-this-research-we-investigate-how-integrating-knowledge-graph-embedding-models-with-large-language-models-can-advance-the-state-of-the-art-in-predicting-argumentative-relations-within-us-political-debates",
          title: '📢 My Master’s thesis work, “Leveraging Graph Structural Knowledge to Improve Argument Relation...',
          description: "",
          section: "News",},{id: "news-exciting-news-i-ve-been-selected-as-one-of-the-3ia-phd-seminars-organizers-for-the-2025-2026-academic-year-alongside-two-fellow-phds-i-ll-be-coordinating-seminars-and-inviting-speakers-on-topics-in-artificial-intelligence-i-m-looking-forward-to-this-new-adventure-and-the-opportunity-to-contribute-to-the-3ia-community",
          title: '🎉 Exciting news! I’ve been selected as one of the 3IA PhD Seminars...',
          description: "",
          section: "News",},{id: "news-i-won-the-2026-efelia-scholarship-for-international-mobility-this-grant-will-allow-me-to-visit-research-labs-abroad",
          title: '🎉 I won the 2026 EFELIA Scholarship for International Mobility! This grant will...',
          description: "",
          section: "News",},{id: "news-️-back-from-alps-2026-an-intensive-advanced-language-processing-school-in-the-french-alps-a-great-experience-that-will-definitely-help-me-improve-as-a-researcher",
          title: '🏔️ Back from ALPS 2026, an intensive advanced language processing school in the...',
          description: "",
          section: "News",},{id: "news-just-landed-in-corsica-for-a-four-day-event-on-research-entrepreneurship-knowing-how-to-articulate-the-impact-of-your-research-beyond-academia-is-increasingly-important",
          title: '💡Just landed in Corsica for a four-day event on research entrepreneurship. Knowing how...',
          description: "",
          section: "News",},{id: "news-our-paper-multimodal-stance-detection-in-controversial-tweets-deborah-dore-diego-blassio-elena-cabrio-serena-villata-has-been-accepted-to-comma-2026-in-this-work-we-explore-how-images-can-help-or-not-multimodal-models-better-understand-the-stance-of-a-tweet-towards-a-given-topic",
          title: '📢 Our paper “Multimodal Stance Detection in Controversial Tweets” (Deborah Dore, Diego Blassio,...',
          description: "",
          section: "News",},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/414/7929", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%62%6F%72%61%68.%64%6F%72%65@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/deborahdore", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/deborah-dore", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-7248-6086", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZLle29QAAAAJ", "_blank");
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
