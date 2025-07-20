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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a growing collection of your cool projects.",
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
        },{id: "nav-people",
          title: "people",
          description: "a fantastic group of people I&#39;m proud to work alongside.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-all-things-change-when-we-do",
      
        title: "All things change when we do",
      
      description: "A personal reflection on change, identity, and the quiet power of internal transformation.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/On-Change/";
        
      },
    },{id: "post-from-solitude-to-strength-on-having-a-personal-den",
      
        title: "From solitude to strength: on having a personal den",
      
      description: "Reflections on solitude, identity, and the purpose behind The Wolf&#39;s Den.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/The_Wolfs_Den/";
        
      },
    },{id: "news-i-m-incredibly-excited-to-share-that-i-ve-joined-the-founding-teams-of-two-innovative-companies-based-in-peru-visit-green-street-holdings-and-kipu-to-learn-more",
          title: 'I’m incredibly excited to share that I’ve joined the founding teams of two...',
          description: "",
          section: "News",},{id: "news-it-39-s-finally-here",
          title: 'It&amp;#39;s finally here!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-visit-bushido-life-if-you-want-premium-quality-grappling-gear",
          title: 'Visit Bushido Life if you want premium quality grappling gear.',
          description: "",
          section: "News",},{id: "news-i-had-the-privilege-of-leading-a-strategic-workshop-on-metrics-and-high-efficiency-startups-for-founders-participating-in-kaman-the-startup-accelerator-at-ucsp-more-details-here",
          title: 'I had the privilege of leading a strategic workshop on Metrics and High-Efficiency...',
          description: "",
          section: "News",},{id: "news-i-ve-joined-kaman-as-a-mentor-through-kipu-my-boutique-consulting-firm-i-ll-support-growth-stage-startups-as-they-scale-sharpen-their-strategy-and-prepare-for-international-expansion",
          title: 'I’ve joined Kaman as a mentor through Kipu, my boutique consulting firm. I’ll...',
          description: "",
          section: "News",},{id: "news-i-ve-joined-incuba-unach-as-a-mentor-through-kipu-i-ll-support-early-stage-startups-as-they-shape-their-strategy-build-products-and-turn-ideas-into-scalable-ventures",
          title: 'I’ve joined Incuba UNACH as a mentor through Kipu. I’ll support early-stage startups...',
          description: "",
          section: "News",},{id: "projects-green-street-holdings",
          title: 'Green Street Holdings',
          description: "Small Business Investments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-welcome-to-kipu",
          title: 'Welcome to Kipu',
          description: "Expert partnership for ambitious companies building with purpose",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: "social-email",
        title: "Email",
        section: "Social",
        handler: () => {window.location.href = "mailto:contact@luchoescobedo.com";},
      },{
        id: "social-linkedin",
        title: "LinkedIn",
        section: "Social",
        handler: () => {window.open("https://www.linkedin.com/in/luchoescobedo", "_blank");},
      },];