import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Projekt Menschlichkeit',
  description: 'Projekt Menschlichkeit',
  author: {
    name: 'Michael Zschutschke',
    // twitter: '@chris1tham',
    url: 'https://mz-production.com/',
    email: 'mzschutschke@mailbox.org',
    summary: 'Tech Projekt Menschlichkeit'
  },
  org: {
    name: 'Projekt Menschlichkeit',
    // twitter: '@hellothamcom',
    url: 'https://projekt-menschlichkeit.info/',
    email: 'hallo@projekt-menschlichkeit.info',
    summary:
      'Unser Plan, wie eine neue Demokratie entsteht'
  },
  location: 'Berlin',
  latlng: [52.520008, 13.404954] as [number, number],
  repository: 'https://github.com/michi-z/project-humanity-astro',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/michi-z/project-humanity-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}
