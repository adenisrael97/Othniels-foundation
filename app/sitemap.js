const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://othnielssupportfoundation.com";

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/donate',
    '/gallery',
    '/gethelp',
    '/programs'
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // IDs from the blogPosts object in app/blog/[id]/page.js
  const blogIds = ['l1', 'l2', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  
  const blogRoutes = blogIds.map((id) => ({
    url: `${siteUrl}/blog/${id}`,
    lastModified: new Date().toISOString(), // In a real app with CMS, this would be the post's updated date
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
