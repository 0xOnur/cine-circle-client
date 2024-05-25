export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Movies",
    children: [
      {
        label: "Top Rated Movies",
        subLabel: "Most popular movies",
        href: "/movies/top-rated",
      },
      {
        label: "Popular Movies",
        subLabel: "Trending now",
        href: "/movies/popular",
      },
      {
        label: "Upcoming Movies",
        subLabel: "Coming soon",
        href: "/movies/upcoming",
      },
    ],
  },
  {
    label: "TV Shows",
    children: [
      {
        label: "Top Rated TV Shows",
        subLabel: "Most popular shows",
        href: "/tv-shows/top-rated",
      },
      {
        label: "Popular Shows",
        subLabel: "Trending now",
        href: "/tv-shows/popular",
      },
      {
        label: "Airing Today",
        subLabel: "Currently on air",
        href: "/tv-shows/airing-today",
      },
      {
        label: "Upcoming TV Shows",
        subLabel: "Coming soon",
        href: "/tv/upcoming",
      },
    ],
  },
];
