class Coder {

  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
    ){
    this.name = name
    this.music = music 
    this.age = age
    this.age = age 
    this.lang = lang
  }

  public getAge(){
    return `Hello, I'm ${this.age}`
  }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
console.log(Dave.age)
console.log(Dave.lang)

