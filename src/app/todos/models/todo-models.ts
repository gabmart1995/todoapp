export class Todo {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor( text ) {
    this.text = text;
    this.id = Math.random();
    this.completed = false;
  }
};