class Film {
  #director;
   static team = 0;
   static Type = {
    Film: 'film',
    Series:'series'
   }
  constructor({title, director, year,type = Film.Type}) {
    this.title = title;
    this.#director = director;
    this.year = year;
  }
  //   changeDirector(name) {
  //     return (this.#director = name);
  //   }
  // getTitle(){
  //     return `movie name: ${this.title}`
  // }\
  get title() {
    return `movie name: ${this.title}`;
  }

  set title(name) {
   if(name === ''){
    console.error('помилка порожне значення')
   }
   return this._title = name;
  }

  //   set director(name) {
  //     return (this.#director = name);
  //   }
}

const titanic = new Film({title:"Titanic", director:"James Kameron", year:1997, type: Film.type.Film});

// class BdFilm {
//   constructor(title, director, year) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
//   }
// }
// const Inceprion = new BdFilm("Inception", "Chrostopher Nolan", 2010);
// const sixSouls = new BdFilm("SixSouls", "Björn Stein", 2010);
titanic.title = 'титаник'

console.log(titanic.title)

console.log(Film.team)
console.log(titanic.team)