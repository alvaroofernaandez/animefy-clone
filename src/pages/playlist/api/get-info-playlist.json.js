import { allPlaylists, songs as allSongs } from "../../../libreria/data";

export async function GET({ params, request}) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylist.find((playlist) => playlist.id === id)
  const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  })
}