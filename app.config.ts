export default defineAppConfig({
  docus: {
    title: 'ERQAN',
    description: 'Sanal Emlak Dünyası',
    image: '/favicon.ico',
    socials: {
      twitter: '@erqan',
      github: 'uzeyirrr/erqan',
      nuxt: {
        label: 'ERQAN',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://erqan.com'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'erqan',
      owner: 'uzeyirrr',
      edit: true
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://erqan.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
