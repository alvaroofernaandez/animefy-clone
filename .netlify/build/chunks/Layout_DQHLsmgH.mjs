import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_CsEFhbaW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { p as playlists } from './data_BwkZCte2.mjs';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { create } from 'zustand';

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "C:/Users/alvar/hagane_fy/src/icons/Library.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "C:/Users/alvar/hagane_fy/src/icons/Home.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "C:/Users/alvar/hagane_fy/src/icons/Search.astro", void 0);

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/Users/alvar/hagane_fy/src/components/SideMenuItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const {
    id,
    cover,
    title,
    artists,
    color
  } = playlist;
  const artistString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400"> ${artistString} </span> </div> </a>`;
}, "C:/Users/alvar/hagane_fy/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})}
Inicio
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", $$Search, {})}
Buscar
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Library", $$Library, {})}
Animes
` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "C:/Users/alvar/hagane_fy/src/components/AsideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/alvar/hagane_fy/node_modules/astro/components/ViewTransitions.astro", void 0);

const usePlayerStore = create ((set) => ({
  isPlaying: false,
  currentMusic: {playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => set({isPlaying}),
  setCurrentMusic: (currentMusic) => set({currentMusic}),
}));

const Pause = () => /* @__PURE__ */ jsx("svg", { height: "16", width: "16", role: "img", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" }) });
const Play = () => /* @__PURE__ */ jsx("svg", { height: "16", width: "16", role: "img", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" }) });
const CurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `
      flex items-center gap-5 relative
      overflow-hidden
    `,
      children: [
        /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold block", children: title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 truncate", children: artists?.join(", ") })
        ] })
      ]
    }
  );
};
function Player() {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `../public/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  const handleSeek = (e) => {
    const time = e.target.value;
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full px-6 py-4 bg-[#181818] border-t border-[#282828]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-1/4 flex items-center", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-1/2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 mb-3", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-white rounded-full p-2 hover:scale-105 transition-transform",
          onClick: handleClick,
          children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full text-xs text-[#a7a7a7]", children: [
        /* @__PURE__ */ jsx("span", { className: "w-12 text-right", children: formatTime(currentTime) }),
        /* @__PURE__ */ jsx("div", { className: "w-full group", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: duration,
            value: currentTime,
            onChange: handleSeek,
            className: "w-full h-1 bg-[#535353] rounded-full appearance-none cursor-pointer\r\n                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3\r\n                        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white\r\n                        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3\r\n                        [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white\r\n                        hover:[&::-webkit-slider-thumb]:bg-[#229bc1] hover:[&::-moz-range-thumb]:bg-[#229bc1]\r\n                        transition-all duration-200 ease-in-out\r\n                        group-hover:h-2",
            style: {
              background: `linear-gradient(to right, #229bc1 0%, #229bc1 ${currentTime / duration * 100}%, #535353 ${currentTime / duration * 100}%, #535353 100%)`
            }
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "w-12", children: formatTime(duration) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 w-1/4 justify-end", children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "w-5 h-5 text-[#a7a7a7]",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" }),
            /* @__PURE__ */ jsx("path", { d: "M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5z" }),
            /* @__PURE__ */ jsx("path", { d: "M4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-24 group", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "range",
          min: "0",
          max: "1",
          step: "0.01",
          value: volume,
          onChange: handleVolumeChange,
          className: "w-full h-1 bg-[#535353] rounded-full appearance-none cursor-pointer\r\n                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3\r\n                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white\r\n                      [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3\r\n                      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white\r\n                      hover:[&::-webkit-slider-thumb]:bg-[#229bc1] hover:[&::-moz-range-thumb]:bg-[#229bc1]\r\n                      transition-all duration-200 ease-in-out\r\n                      group-hover:h-2",
          style: {
            background: `linear-gradient(to right, #229bc1 0%, #229bc1 ${volume * 100}%, #535353 ${volume * 100}%, #535353 100%)`
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "audio",
      {
        ref: audioRef,
        onTimeUpdate: handleTimeUpdate,
        onLoadedMetadata: handleLoadedMetadata
      }
    )
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex-col flex overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg overflow-y-auto bg-zinc-900 w-full" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] min-h-[100px] " data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "C:/Users/alvar/hagane_fy/src/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>  </body></html>`;
}, "C:/Users/alvar/hagane_fy/src/layouts/Layout.astro", "self");

export { $$Layout as $, Pause as P, Play as a, usePlayerStore as u };
