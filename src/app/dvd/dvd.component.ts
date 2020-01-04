import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DvdService } from '../services/dvd.service';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;
  constructor(private dvdService: DvdService) { }

  ngOnInit() {
    this.dvds$ = this.dvdService.dvd$;
  }

}
