import 'dotenv/config'

export default async (app) => {
  const appUrl = process.env.APP_URL || 'https://{{ddevurl}}.ddev.site

  app.set('dev.url', appUrl)
  app.set('dev.host', '0.0.0.0')
  app.set('dev.port', 3000) // Make sure this port is specified
  app.entry('app', ['@scripts/app', '@styles/app'])
  app.entry('editor', ['@scripts/editor', '@styles/editor'])

  // Add HMR configuration
  app.proxy.https = true
  app.proxy.domain = new URL(appUrl).hostname

  // Ensure correct public path
  app.setPublicPath('/app/themes/sage/public/')

  process.env.APP_URL = appUrl
}
