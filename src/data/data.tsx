import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
*/
// Use the video placed in `public/` for reliable static serving
// Move `src/images/header-background4.mp4` -> `public/header-background4.mp4`
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const heroImage = '/header-background4.mp4';
/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Germán Guevara Resume',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Germán Guevara`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Senior Mobile Engineer with <strong className="text-stone-100">7+ years of experience</strong> specializing in high-security Fintech 💳 and Government 🏛️ applications. Expert in native Android development (<strong className="text-stone-100">Kotlin/Java</strong> 📱, <strong className="text-stone-100">Jetpack Compose</strong> 🎨) with a strong track record in Clean Architecture 🏗️ and CI/CD 🔁 implementation. Recently expanded technical scope to deliver full-stack solutions using <strong className="text-stone-100">Golang</strong> 🐹 (Backend) and <strong className="text-stone-100">Next.js</strong> ⚡ (Frontend). Proven ability to work remotely as a contractor for international clients.
      </p>
      {/*<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time ⏰, you can catch me playing <strong className="text-stone-100">table tennis 🏓</strong>,
        plucking my <strong className="text-stone-100">venezuelan cuatro 🎶</strong>, or exploring {' '}
        <strong className="text-stone-100">Arduino</strong> things 👨🏻‍💻
      </p>*/}
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A pragmatic problem solver and integrative thinker, connecting theory to practical deployments. Expert in Android-Kotlin 📱, Flutter 🎯, Docker 🐳, Golang 🐹 and scalable backend architectures`,
  aboutItems: [
    {label: 'Location', text: 'Puerto Ordaz, Venezuela', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Venezuelan', Icon: FlagIcon},
    {label: 'Interests', text: 'Music, Table Tennis, Arduino', Icon: SparklesIcon},
    {label: 'Study', text: 'National Experimental University of Guayana', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Mobile development',
    skills: [
      {name: 'Kotlin', level: 9},
      {name: 'Java', level: 8},
      {name: 'Jetpack Compose', level: 8},
      {name: 'Android SDK', level: 8},
      {name: 'Retrofit', level: 7},
      {name: 'Dagger / Hilt', level: 7},
      {name: 'Coroutines', level: 8},
      {name: 'Clean Architecture', level: 8},
      {name: 'MVVM', level: 8},
      {name: 'Gradle', level: 7},
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {name: 'Golang', level: 8},
      {name: 'Java (Spring Boot)', level: 7},
      {name: 'RESTful APIs', level: 8},
      {name: 'Microservices', level: 7},
    ],
  },
  {
    name: 'Frontend / Web',
    skills: [
      {name: 'Next.js', level: 7},
      {name: 'React', level: 8},
      {name: 'HTML5', level: 8},
      {name: 'CSS3', level: 7},
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      {name: 'Git', level: 9},
      {name: 'GitLab CI/CD', level: 8},
      {name: 'Docker', level: 8},
      {name: 'Jira', level: 7},
      {name: 'Postman', level: 7},
      {name: 'Firebase (FCM, Analytics)', level: 7},
      {name: 'Google Maps API', level: 7},
      {name: 'OAuth 2.0', level: 7},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2023 - Mar 2025',
    location: 'Ionix S.P.A (via Interfell) — Concepción, Chile / Remote',
    title: 'Senior Android Developer (Contractor)',
    content: (
      <ul>
        <li>Architected and maintained secure payment libraries for Fintech clients, following strict financial security standards.</li>
        <li>Led migration from XML views to <strong>Jetpack Compose</strong>, improving UI performance and reducing boilerplate.</li>
        <li>Implemented robust OAuth 2.0 authentication flows and integrated complex third‑party payment SDKs.</li>
        <li>Worked in Agile teams using Jira and GitLab CI/CD for automated testing and deployments.</li>
      </ul>
    ),
  },
  {
    date: 'Feb 2022 - Jun 2024',
    location: 'Buenos Aires Government (via Epidata) — Buenos Aires, Argentina / Remote',
    title: 'Android Developer (Contractor)',
    content: (
      <ul>
        <li>Led Android development for a large-scale government app, serving inspectors and citizens.</li>
        <li>Refactored the codebase to adopt <strong>Clean Architecture</strong> and <strong>MVVM</strong>, reducing technical debt.</li>
        <li>Integrated Google Maps for geospatial visualization and tracking of incidents.</li>
        <li>Optimized CI/CD pipelines to streamline release cycles.</li>
      </ul>
    ),
  },
  {
    date: 'Feb 2021 - Feb 2022',
    location: 'PayCIPS — Monterrey, México / Remote',
    title: 'Android Developer',
    content: (
      <ul>
        <li>Developed Point of Sale (POS) applications for specialized hardware, integrating thermal printers, barcode scanners and NFC readers.</li>
        <li>Used <strong>RxJava</strong> to manage complex asynchronous transaction flows.</li>
        <li>Integrated with Java Spring Boot backends to process secure transactions.</li>
      </ul>
    ),
  },
  {
    date: 'Mar 2018 - Nov 2021',
    location: 'Xpectra Remote Management — D.F., México / Remote',
    title: 'Android Developer',
    content: (
      <ul>
        <li>Built mission-critical applications for alarm monitoring centers with emphasis on reliability and real-time data delivery.</li>
        <li>Implemented real-time push notifications (FCM) and socket-based connectivity.</li>
        <li>Designed a modular structure using Android Flavors for white-labeling multiple clients from a single codebase.</li>
        <li>Managed dependency injection with Dagger/Hilt to improve testability and modularity.</li>
      </ul>
    ),
  },
  {
    date: 'Sept 2019 - Jan 2020',
    location: 'Arcade Software MX — Monterrey, México / Remote',
    title: 'Android Developer',
    content: (
      <ul>
        <li>Maintained cash flow control applications for casino operations, ensuring accuracy in financial reporting.</li>
        <li>Refactored legacy Java code to improve stability and prevent memory leaks.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contact me for freelance projects or full-time opportunities. I am currently available for new challenges and collaborations.',
  items: [
    {
      type: ContactType.Phone,
      text: '(+58) 424 9394649',
      href: 'https://wa.me/584249394649',
    },
    {
      type: ContactType.Email,
      text: 'germanguevara2496@gmail.com',
      href: 'mailto:germanguevara2496@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Puerto Ordaz, Venezuela',
      href: 'https://maps.app.goo.gl/UWg5bYLK3KyHCuMA6',
    },
    {
      type: ContactType.Instagram,
      text: '@german_2496',
      href: 'https://www.instagram.com/german_2496/',
    },
    /*{
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },*/
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/german-guevara-2a4742141/'},
  /*{label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},*/
];
