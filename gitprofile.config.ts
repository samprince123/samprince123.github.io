// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'samprince123', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['samprince123/microbiomeanalysis', 'samprince123/genomeanalysis'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Effect of Music on Memory retention',
          description:
            'Experimental research paper studying the effects of different music on memory retention',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sprince@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Bioinformatics',
    'Research',
    'Statistics',
    'Data Analysis',
  ],
  experiences: [
    {
      company: 'The Paver Company',
      position: 'Customer Service Lead',
      from: 'July 2010',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Dignity Health',
      position: 'Patient Access representative',
      from: 'October 2018',
      to: 'May 2022',
      companyLink: '',
    },
   
  ],
  certifications: [
    {
      name: 'CPT I',
      body: 'Certified Phlebotomy Technician I (CPT I)',
      year: 'June 2016',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'BS in Biological Sciences with  concentration in Cellular, Molecular, and Microbial Biology',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'California State University, Stanislaus',
      degree: 'BA in Psychology with a concentration in experimental psychology',
      from: '2022',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Whole Genome Sequence of Alantibacter subterranea Isolated from Uranium-contaminated Sediment',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Sofia Amaral, Luis Garcia, Adrianna Gonzalez, Samantha Prince, Komal Takhar ',
      link: 'https://github.com/samprince123/samprince123.github.io/blob/main/MRA%20paper.pdf',
      description:
        'We report the whole genome sequence of an antibiotic resistance strain of Atlantibacter subterranea that was isolated from Uranium-contaminated sediment in Tennessee. The whole genome sequence of this strain was 4,717,064 bp in length, contained 34 contigs and 29 scaffolds, and had a GC content of 55.17%.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  raw: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
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
