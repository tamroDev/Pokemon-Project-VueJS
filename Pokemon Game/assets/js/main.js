function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const DataPokemon = [
  {
    id: 1,
    name: "bulbasaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
    },
  },
  {
    id: 2,
    name: "ivysaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      },
    },
  },
  {
    id: 3,
    name: "venusaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      },
    },
  },
  {
    id: 4,
    name: "charmander",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
    },
  },
  {
    id: 5,
    name: "charmeleon",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      },
    },
  },
  {
    id: 6,
    name: "charizard",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      },
    },
  },
  {
    id: 7,
    name: "squirtle",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      },
    },
  },
  {
    id: 8,
    name: "wartortle",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
      },
    },
  },
  {
    id: 9,
    name: "blastoise",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
      },
    },
  },
  {
    id: 10,
    name: "caterpie",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      },
    },
  },
  {
    id: 11,
    name: "metapod",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
      },
    },
  },
  {
    id: 12,
    name: "butterfree",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
      },
    },
  },
  {
    id: 13,
    name: "weedle",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
      },
    },
  },
  {
    id: 14,
    name: "kakuna",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
      },
    },
  },
  {
    id: 15,
    name: "beedrill",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
      },
    },
  },
  {
    id: 16,
    name: "pidgey",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
      },
    },
  },
  {
    id: 17,
    name: "pidgeotto",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
      },
    },
  },
  {
    id: 18,
    name: "pidgeot",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
      },
    },
  },
  {
    id: 19,
    name: "rattata",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
      },
    },
  },
  {
    id: 20,
    name: "raticate",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
      },
    },
  },
  {
    id: 21,
    name: "spearow",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
      },
    },
  },
  {
    id: 22,
    name: "fearow",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
      },
    },
  },
  {
    id: 23,
    name: "ekans",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
      },
    },
  },
  {
    id: 24,
    name: "arbok",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      },
    },
  },
  {
    id: 25,
    name: "pikachu",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      },
    },
  },
  {
    id: 26,
    name: "raichu",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
      },
    },
  },
  {
    id: 27,
    name: "sandshrew",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
      },
    },
  },
  {
    id: 28,
    name: "sandslash",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
      },
    },
  },
  {
    id: 29,
    name: "nidoran-f",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
      },
    },
  },
  {
    id: 30,
    name: "nidorina",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
      },
    },
  },
  {
    id: 31,
    name: "nidoqueen",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
      },
    },
  },
  {
    id: 32,
    name: "nidoran-m",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
      },
    },
  },
  {
    id: 33,
    name: "nidorino",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
      },
    },
  },
  {
    id: 34,
    name: "nidoking",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
      },
    },
  },
  {
    id: 35,
    name: "clefairy",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
      },
    },
  },
  {
    id: 36,
    name: "clefable",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
      },
    },
  },
  {
    id: 37,
    name: "vulpix",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      },
    },
  },
  {
    id: 38,
    name: "ninetales",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
      },
    },
  },
  {
    id: 39,
    name: "jigglypuff",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
      },
    },
  },
  {
    id: 40,
    name: "wigglytuff",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
      },
    },
  },
  {
    id: 41,
    name: "zubat",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",
      },
    },
  },
  {
    id: 42,
    name: "golbat",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
      },
    },
  },
  {
    id: 43,
    name: "oddish",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
      },
    },
  },
  {
    id: 44,
    name: "gloom",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
      },
    },
  },
  {
    id: 45,
    name: "vileplume",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
      },
    },
  },
  {
    id: 46,
    name: "paras",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
      },
    },
  },
  {
    id: 47,
    name: "parasect",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
      },
    },
  },
  {
    id: 48,
    name: "venonat",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
      },
    },
  },
  {
    id: 49,
    name: "venomoth",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
      },
    },
  },
  {
    id: 50,
    name: "diglett",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",
      },
    },
  },
  {
    id: 51,
    name: "dugtrio",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
      },
    },
  },
  {
    id: 52,
    name: "meowth",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
      },
    },
  },
  {
    id: 53,
    name: "persian",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
      },
    },
  },
  {
    id: 54,
    name: "psyduck",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg",
      },
    },
  },
  {
    id: 55,
    name: "golduck",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
      },
    },
  },
  {
    id: 56,
    name: "mankey",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
      },
    },
  },
  {
    id: 57,
    name: "primeape",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
      },
    },
  },
  {
    id: 58,
    name: "growlithe",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg",
      },
    },
  },
  {
    id: 59,
    name: "arcanine",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
      },
    },
  },
  {
    id: 60,
    name: "poliwag",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",
      },
    },
  },
  {
    id: 61,
    name: "poliwhirl",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",
      },
    },
  },
  {
    id: 62,
    name: "poliwrath",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
      },
    },
  },
  {
    id: 63,
    name: "abra",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",
      },
    },
  },
  {
    id: 64,
    name: "kadabra",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
      },
    },
  },
  {
    id: 65,
    name: "alakazam",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
      },
    },
  },
  {
    id: 66,
    name: "machop",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg",
      },
    },
  },
  {
    id: 67,
    name: "machoke",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",
      },
    },
  },
  {
    id: 68,
    name: "machamp",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
      },
    },
  },
  {
    id: 69,
    name: "bellsprout",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",
      },
    },
  },
  {
    id: 70,
    name: "weepinbell",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
      },
    },
  },
  {
    id: 71,
    name: "victreebel",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
      },
    },
  },
  {
    id: 72,
    name: "tentacool",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",
      },
    },
  },
  {
    id: 73,
    name: "tentacruel",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
      },
    },
  },
  {
    id: 74,
    name: "geodude",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
      },
    },
  },
  {
    id: 75,
    name: "graveler",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
      },
    },
  },
  {
    id: 76,
    name: "golem",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
      },
    },
  },
  {
    id: 77,
    name: "ponyta",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg",
      },
    },
  },
  {
    id: 78,
    name: "rapidash",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
      },
    },
  },
  {
    id: 79,
    name: "slowpoke",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
      },
    },
  },
  {
    id: 80,
    name: "slowbro",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
      },
    },
  },
  {
    id: 81,
    name: "magnemite",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
      },
    },
  },
  {
    id: 82,
    name: "magneton",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
      },
    },
  },
  {
    id: 83,
    name: "farfetchd",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
      },
    },
  },
  {
    id: 84,
    name: "doduo",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",
      },
    },
  },
  {
    id: 85,
    name: "dodrio",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
      },
    },
  },
  {
    id: 86,
    name: "seel",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/86.svg",
      },
    },
  },
  {
    id: 87,
    name: "dewgong",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
      },
    },
  },
  {
    id: 88,
    name: "grimer",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg",
      },
    },
  },
  {
    id: 89,
    name: "muk",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
      },
    },
  },
  {
    id: 90,
    name: "shellder",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/90.svg",
      },
    },
  },
  {
    id: 91,
    name: "cloyster",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
      },
    },
  },
  {
    id: 92,
    name: "gastly",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
      },
    },
  },
  {
    id: 93,
    name: "haunter",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
      },
    },
  },
  {
    id: 94,
    name: "gengar",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
      },
    },
  },
  {
    id: 95,
    name: "onix",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
      },
    },
  },
  {
    id: 96,
    name: "drowzee",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/96.svg",
      },
    },
  },
  {
    id: 97,
    name: "hypno",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
      },
    },
  },
  {
    id: 98,
    name: "krabby",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/98.svg",
      },
    },
  },
  {
    id: 99,
    name: "kingler",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
      },
    },
  },
  {
    id: 100,
    name: "voltorb",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg",
      },
    },
  },
];

Vue.createApp({
  data: () => {
    return {
      cards: [
        {
          id: 1,
          name: "bulbasaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        {
          id: 2,
          name: "ivysaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            },
          },
        },
        {
          id: 3,
          name: "venusaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            },
          },
        },
        {
          id: 4,
          name: "charmander",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            },
          },
        },
        {
          id: 1,
          name: "bulbasaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
          },
        },
        {
          id: 2,
          name: "ivysaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            },
          },
        },
        {
          id: 3,
          name: "venusaur",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            },
          },
        },
        {
          id: 4,
          name: "charmander",
          images: {
            game: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            },
            png: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
            svg: {
              front:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            },
          },
        },
      ].sort(() => Math.random() - 0.5),

      selectCard: [],
      pairedCard: [],
      gameResume: {
        win: false,
        lost: false,
      },
      gameData: {
        selectDeck: 4,
        badSelect: 10,
      },
    };
  },
  watch: {
    "gameData.selectDeck"(newValue) {
      const deck = parseInt(newValue);

      this.gameData.selectDeck = deck;
      this.handleResetGame(deck);
    },
    "gameData.badSelect"(newValue) {
      if (newValue === 0) {
        this.gameResume = {
          ...this.gameResume,
          lost: true,
        };
      }
    },
  },
  computed: {
    coveredCard() {
      let coveredCard = this.cards.filter((card) => {
        return !this.unCoveredCard.includes(card);
      });

      if (coveredCard.length === 0) {
        this.gameResume = {
          ...this.gameResume,
          win: true,
        };
      }

      return coveredCard;
    },
    unCoveredCard() {
      let unCoveredCard = [...this.selectCard, ...this.pairedCard];

      return unCoveredCard;
    },
  },
  methods: {
    handleSelectCard(card) {
      this.selectCard.push(card);

      if (this.selectCard.length === 2) {
        const [card1, card2] = this.selectCard;

        if (card1.id === card2.id) {
          this.pairedCard.push(card1);
          this.pairedCard.push(card2);
        } else {
          this.gameData.badSelect -= 1;
        }

        setTimeout(() => {
          this.selectCard = [];
        }, 800);
      }
    },
    handleResetGame() {
      const deck = this.gameData.selectDeck;
      const pokemonCardList = this.createPokemonByDeck(deck);

      const pairePokemonList = this.createPairPokemon(pokemonCardList).sort(
        () => Math.random() - 0.5
      );

      this.cards = pairePokemonList;

      this.selectCard = [];
      this.pairedCard = [];
      this.gameResume = {
        win: false,
        lost: false,
      };
      this.gameData.badSelect = 10;
    },
    createPokemonByDeck(deck) {
      const pokemonCardList = [];
      for (let i = 0; i < deck; i++) {
        const numberRange_00_99 = getRandomInt(0, 99);
        const pokemonCard = DataPokemon[numberRange_00_99];
        pokemonCardList.push(pokemonCard);
      }
      return pokemonCardList;
    },
    createPairPokemon(pokemonCardList) {
      const PairePokemonList = [];

      pokemonCardList.map((pokemonCard) => {
        const pokemonDuplicate1 = { ...pokemonCard };
        const pokemonDuplicate2 = { ...pokemonCard };

        PairePokemonList.push(pokemonDuplicate1);
        PairePokemonList.push(pokemonDuplicate2);
      });

      return PairePokemonList;
    },
  },
}).mount("#app");
