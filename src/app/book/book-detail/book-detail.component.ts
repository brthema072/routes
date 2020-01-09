import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    console.log("index ", this.route.snapshot.paramMap.get('index'));
    this.route.paramMap.subscribe((params: ParamMap)=> console.log('Index: ', params.get('index')))
  }

}
