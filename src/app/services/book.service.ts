import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';

import { map, delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() { 
    timer(2000).subscribe(()=> 
      this.bookSubject$.next([
        {title: "Book1", pages: 200, authores:["John", "nicole"]},
        {title: "Book2", pages: 100, authores:["mily"]},
        {title: "Book3", pages: 300, authores:["fred"]},
        {title: "Book4", pages: 230, authores:["ane", "peter","samuel"]},
        {title: "Book5", pages: 130, authores:["paul", "John"]},
      ])
    )
    
  }

  add(b: Book){
    this.bookSubject$.getValue().push(b);
  }

  remove(i: number){
    let books = this.bookSubject$.getValue()
    
    if(i>=0 && i<books.length){
      books.splice(i,1);
    }
  }

  get(i: number): Observable<Book>{
    return this.books$.pipe(
      map(books=> (i>=0 && i<books.length)? books[i]: null),
      delay(1000)
    )
  }
}
