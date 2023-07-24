export type Article = {
  title: string;
  link: string;
  img: string;
  date: string;
  tags: ('rxjs' | 'angular' | 'typescript' | 'ngrx')[];
  description: string;
};
