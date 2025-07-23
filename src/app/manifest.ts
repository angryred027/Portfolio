// import type { MetadataRoute } from 'next'

export default function manifest() {
  return {
    theme_color: "#ffff44",
    dir: "auto",
    background_color: "#ededed",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    start_url: "/",
    scope: "/",
    id: "com.minamiharuto.portfolio",
    orientation: "any",
    lang: "en",
    prefer_related_applications: false,
    categories: ["development", "haruto", "Minami Haruto", "minami", "news", "blog", "full-stack developer", "portfolio"],
    name: "Minami Haruto",
    description:
      "Hello! I'm Minami Haruto, a senior web developer based in Osaka, Japan. I love to build beautiful and functional websites and apps.",
    short_name: "Haruto",
    family_name: "Haruto",
    given_name: "Minami",
    related_applications: [],
    icons: [
      {
        src: "/brand/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon-512x512.png",

        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/brand/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "monochrome",
      },

      {
        src: "/brand/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/favicon-192x192.png",
        sizes: "257x257",
        type: "image/png",
      },
      {
        src: "/brand/favicon-384x384.png",
        sizes: "385x385",
        type: "image/png",
      },
      {
        src: "/brand/favicon-512x512.png",
        sizes: "513x513",
        type: "image/png",
      },
      {
        src: "/brand/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    protocol_handlers: [
      {
        protocol: "web+pwa",
        url: "/?pwaprotocolredirect=%s",
      },
      {
        protocol: "web+minamiharuto",
        url: "/?pwaprotocolredirect=%s",
      },
    ],
    shortcuts: [
      {
        name: "Blog",
        url: "/blog",
        icons: [
          {
            src: "/icons/book-open.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Projects",
        url: "/projects",
        icons: [
          {
            src: "/icons/folder.png",
            sizes: "192x192",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: "/brand/screenshot.png",
        type: "image/jpeg",
        sizes: "900x1600",
      },
      {
        src: "/brand/screenshot2.png",
        type: "image/jpeg",
        sizes: "900x1600",
      },
      {
        src: "/brand/screenshot3.png",
        type: "image/jpeg",
        sizes: "900x1600",
      },
    ],

    handle_links: "preferred",
    share_target: {
      action: "/share",
      method: "post",
      enctype: "multipart/form-data",
      params: [
        {
          name: "title",
          value: "text",
          required: true,
        },
      ],
    },
    edge_side_panel: { preferred_width: 400 },
    offline_capability: true,
    periodic_sync: {
      min_interval: 24 * 60 * 60, // Sync every 24 hours
    },
    push_notifications: true,
    scope_extensions: [
      {
        origin: "https://minamiharuto.vercel.app",
      },
    ],
    launch_handler: {
      platform: "windows",
    },
    background_sync: true,
  };
}
