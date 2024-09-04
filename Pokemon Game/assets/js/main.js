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
        badSelect: 10,
      },
    };
  },
  watch: {
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
      this.cards = this.cards.sort(() => Math.random() - 0.5);
      this.selectCard = [];
      this.pairedCard = [];
      this.gameResume = {
        win: false,
        lost: false,
      };
      this.gameData = {
        badSelect: 10,
      };
    },
  },
}).mount("#app");
