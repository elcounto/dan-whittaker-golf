export const links = {
  website: 'https://danwhittakergolf.com/',
  channel: 'https://www.youtube.com/c/danwhittakergolf',
  subscription: 'https://danwhittakergolf.com/cart',
  downloads: 'https://danwhittakergolf.com/pages/downloads',
  lessons: 'https://danwhittakergolf.com/pages/lessons',
  team: 'https://danwhittakergolf.com/pages/team-dwg',
};
// IDs from the official website. First two labels are editorial, not YouTube titles.
export const collections = [
  { id: 'PLz6XctH-dIX_rk8-PLdCTGIc9OznW6_aq', title: 'The coaching collection', category: 'Coaching', description: 'Explore a video collection featured on Dan’s website.', number: '01' },
  { id: 'PLz6XctH-dIX9X09ThRt7DnhCxhQv8HHwt', title: 'More from Dan', category: 'Coaching', description: 'Keep learning with another of Dan’s featured playlists.', number: '02' },
  { id: 'PLz6XctH-dIX-WqzSoeGc845kda5aWn8f4', title: 'Pro swing analysis', category: 'Analysis', description: 'Take a closer look at professional golf swings.', number: '03' },
];
export const playlistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;
