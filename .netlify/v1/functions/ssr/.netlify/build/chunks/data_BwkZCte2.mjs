const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" }
};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "One Piece",
    color: colors.yellow,
    cover: "https://b.thumbs.redditmedia.com/X4VDgVKqsiTnA22tAJQ72MHJQs7Sd7hsFaBBqLqIqcY.png",
    artists: ["by Eiichiro Oda"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Full Metal Alchemist",
    color: colors.purple,
    cover: "https://images4.alphacoders.com/206/thumb-1920-206454.png",
    artists: ["by Hiromu Arakawa"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Naruto",
    color: colors.orange,
    cover: "https://staticg.sportskeeda.com/editor/2023/11/2be69-17002462477746-1920.jpg",
    artists: ["by Masashi Kishimoto"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Shingeki no Kyojin",
    color: colors.blue,
    cover: "https://i2o.scdn.co/image/ab67706c0000cfa3db5f796be413045a9aaff9d6",
    artists: ["by Hajime Isayama"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Bleach",
    color: colors.yellow,
    cover: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/how-strong-is-kenpachi-zaraki-bleach-featured.jpg",
    artists: ["by Tite Kubo"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Black Clover",
    color: colors.red,
    cover: "https://i.pinimg.com/originals/d8/28/cf/d828cf2f9467dca2ead406523865ea16.jpg",
    artists: ["by Yuki Tabata"]
  },
  {
    id: "7",
    albumId: 7,
    title: "Kimetsu No Yaiba",
    color: colors.pink,
    cover: "https://hips.hearstapps.com/hmg-prod/images/demon-slayer-kimetsu-no-yaiba-642d336e4b60d.jpg?crop=1xw:1xh;center,top&resize=1200:*  ",
    artists: ["by Koyoharu Gotouge"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Assu! - Opening 26 One piece",
    "image": `https://b.thumbs.redditmedia.com/X4VDgVKqsiTnA22tAJQ72MHJQs7Sd7hsFaBBqLqIqcY.png`,
    "artists": ["Hiroshi Kitadani"],
    "album": "One piece",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Coffee Daze",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "again - Opening 1 Full Metal Alchemist",
    "image": `https://images4.alphacoders.com/206/thumb-1920-206454.png`,
    "artists": ["YUI"],
    "album": "Full Metal Alchemist",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "SIGN - Opening Naruto Shippuden",
    "image": `https://staticg.sportskeeda.com/editor/2023/11/2be69-17002462477746-1920.jpg`,
    "artists": ["FLOW"],
    "album": "Naruto",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "You See A Big Girl - OST SNK",
    "image": "https://i2o.scdn.co/image/ab67706c0000cfa3db5f796be413045a9aaff9d6",
    "artists": ["Hiroyuki Sawano"],
    "album": "Shingeki No Kyojin",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Number One - OST Bleach",
    "image": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/how-strong-is-kenpachi-zaraki-bleach-featured.jpg",
    "artists": ["Shiro SAGISU"],
    "album": "Bleach",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "Haruka Mirai - Opening 1 Black Clover",
    "image": "https://i.pinimg.com/originals/d8/28/cf/d828cf2f9467dca2ead406523865ea16.jpg",
    "artists": ["Kankaku Piero"],
    "album": "Black Clover",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 7,
    "title": "Kizuna no Kiseki - Opening 3 Kimetsu No Yaiba",
    "image": "https://hips.hearstapps.com/hmg-prod/images/demon-slayer-kimetsu-no-yaiba-642d336e4b60d.jpg?crop=1xw:1xh;center,top&resize=1200:*  ",
    "artists": ["MAN WITH A MISSION × milet"],
    "album": "Kimetsu No Yaiba",
    "duration": "4:20"
  }
];

export { allPlaylists as a, playlists as p, songs as s };
