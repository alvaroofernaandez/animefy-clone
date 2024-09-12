import { a as allPlaylists, s as songs } from '../../chunks/data_BwkZCte2.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ params, request }) {

  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs$1 = songs.filter(song => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs: songs$1 }), {
    headers: { "content-type": "application/json" },
  })
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
