// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'holdennguyen', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['holdennguyen/kubernetes-install-cluster-with-kubeadm', 'holdennguyen/cicd-pipeline-java-webapp', 'holdennguyen/kasm-workspaces-single-server', 'holdennguyen/jenkins-setup-aws', 'holdennguyen/cloudsherlock', 'holdennguyen/vietcslab'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hung, Nguyen Minh',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/minhung/',
    substack: 'https://minhung.substack.com',
    medium: 'https://medium.com/@holdennguyen',
    website: 'https://zaap.bio/Minhung',
    phone: '0912941050',
    email: 'holdennguyen6174@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1g2OwN65XdlBXfDExH7zcTw5nPAJRcQ4b/view?usp=drive_link'
  },
  skills: [
    'AWS',
    'Kubernetes',
    'Docker',
    'Terraform',
    'ArgoCD',
    'Prometheus',
    'Grafana',
    'MongoDB',
    'Node.js',
    'Python',
    'Golang',
    'Rust',
    'Java',
    'AIAgent',
  ],
  experiences: [
    {
      company: 'OPSWAT',
      position: 'Site Reliability Engineer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://www.opswat.com',
    },
    {
      company: 'Intel',
      position: 'Operation Engineer',
      from: 'Mar 2020',
      to: 'May 2022',
      companyLink: 'https://www.intel.vn',
    },
    {
      company: 'Intel',
      position: 'Preventive Maintenance',
      from: 'Aug 2019',
      to: 'Mar 2020',
      companyLink: 'https://www.intel.vn',
    },
    {
      company: 'Intel',
      position: 'Equipment Specialist',
      from: 'Jan 2017',
      to: 'Aug 2019',
      companyLink: 'https://www.intel.vn',
    },
  ],
  certifications: [
    {
      name: 'Google AI Essentials',
      body: 'Issued by Coursera',
      year: 'September 2024',
      link: 'https://www.credly.com/badges/5f87ab51-af40-4039-a4ef-30fcb0a2fa8c/public_url',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      body: 'Issued by Amazon Web Services Training and Certification',
      year: 'December 2022',
      link: 'https://www.credly.com/badges/db6f862c-7030-4951-8314-f1c698318c16/public_url',
    },
  ],
  educations: [
    {
      institution: 'Nguyen Tat Thanh University (GPA: 3.5)',
      degree: 'Bachelor Degree Of Information Technology',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Petrovietnam College',
      degree: 'The Degree Of Associate in Mechanical',
      from: '2013',
      to: '2016',
    },
    {
      institution: 'Hung Vuong High School for the Gifted',
      degree: 'Highschool Diploma',
      from: '2010',
      to: '2013',
    },
  ],
  publications: [
    {
      title: 'My Story',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: 'Hello! I\'m Holden (Hung) Nguyen. I\'m a DevOps/SRE engineer from Vietnam.\n\n' +
        '🔭 After spending more than five years working in the mechanical engineering field at Intel Vietnam, I decided it was time for a career change. During that time, I was focused on using LEAN principles and innovation to improve operational efficiency, I notice how much the world was being transformed by software, particularly in the mechanical industry. That realization led me to join an internal mentoring program in 2021, where I had the opportunity to meet with a principal engineer of Intel\'s IoT Group from the US. During our one-on-one meetings, we delved into the world of IoT and its related concepts, including connectivity broadcasting, security, micro-services, and DevOps culture. This experience was a turning point for me, as it inspired me to become a DevOps/SRE engineer and work towards growing into roles such as MLOps/DataOps/AIOps.\n\n' +
        '🌱 This shift was more than a career pivot—it marked the beginning of my specialization in cutting-edge areas like DevSecOps. My successful transition culminated at OPSWAT Vietnam, where I excelled as an SRE, managing the Metadefender Cloud Platform/API. Here, my role not only deepened my expertise in cybersecurity and infrastructure but also underscored my continuous research and development within the software field.\n\n' +
        '👯 One of the methods I\'ve found to be particularly effective is sharing what I learn with others. By doing so, not only am I able to better organize my own knowledge, but I\'m also able to communicate with others and reinforce my own understanding while correcting any misunderstandings along the way.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'holdennguyen', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
