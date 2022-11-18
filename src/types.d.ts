export interface FilmItems {
  id: string;
  title: string;
}

export interface BlogPost {
  error: boolean,
  category: string,
  type: string,
  joke: string,
  setup: string;
  flags: object,
  id: number,
  safe: boolean,
  lang: string,
}