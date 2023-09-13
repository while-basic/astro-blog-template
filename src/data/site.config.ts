// BASIC BLOG METADATA

interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
}

export const siteConfig: SiteConfig = {
	author: 'Christopher Celaya',
	title: '3-minute blog',
	description: 'Short snippets of information.',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post' // Message to share a post on social media
}
