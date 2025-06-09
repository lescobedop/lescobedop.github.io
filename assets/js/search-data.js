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
        },{id: "post-a-sample-blog-post",
      
        title: "a sample blog post",
      
      description: "a sample blog post, new post.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/sample-post/";
        
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
          section: "News",},{id: "projects-green-street-holdings",
          title: 'Green Street Holdings',
          description: "Investments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-green-street-holdings",
          title: 'Green Street Holdings',
          description: "Small Business Investments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-bushido-life",
          title: 'Bushido Life',
          description: "My e-store for premium quality training gear",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-welcome-to-kipu",
          title: 'Welcome to Kipu',
          description: "Unlocking the potential of data &amp; AI for your business",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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