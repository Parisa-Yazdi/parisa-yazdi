interface SubPage {
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  subPages?: Record<string, SubPage>;
}

export const menuItems: MenuItem[] = [
  {
    name: 'HOME',
    href: '/'
  },

  {
    name: 'ARTICLES',
    href: '/articles',
    subPages: {
      'View Archive': {
        href: '/articles'
      },
      'View All Categories': {
        href: '/article-categories'
      },
      'Existential & Metaphysics': {
        href: '/articles/existential-and-metaphysics'
      },
      'Astrology & Archetypes': {
        href: '/articles/astrology-and-archetypes'
      },
      'Self-Knowledge': {
        href: '/articles/self-knowledge'
      },
      'Personal Journals': {
        href: '/articles/personal-journals'
      }
    }
  },
  {
    name: 'VIDEOS',
    href: '/videos',
    subPages: {
      'View Archive': {
        href: '/videos'
      },
      'View All Categories': {
        href: '/video-categories'
      },
      'Existential & Metaphysics': {
        href: '/videos/existential-and-metaphysics'
      },
      'Astrology & Archetypes': {
        href: '/videos/astrology-and-archetypes'
      },
      'Self-Knowledge': {
        href: '/videos/self-knowledge'
      },
      'Personal Journals': {
        href: '/videos/personal-journals'
      }
    }
  },
  {
    name: 'BOOKS',
    href: '/books'
  },
  {
    name: 'COURSES',
    href: '#',
    subPages: {
      Classes: {
        href: '/classes-and-courses/classes'
      },
      Courses: {
        href: '/classes-and-courses/courses'
      }
    }
  },
  {
    name: 'READINGS',
    href: '/classes-and-courses/readings'
  },
  {
    name: 'GALLERY',
    href: '/gallery'
  },
  {
    name: 'ABOUT',
    href: '/about'
  },
  {
    name: 'CONTACT',
    href: '/contact'
  }
];
