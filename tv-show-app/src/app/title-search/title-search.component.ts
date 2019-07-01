import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css']
})
export class TitleSearchComponent implements OnInit {
@Output() searchEvent = new EventEmitter<string>();

  search = new FormControl('',[Validators.minLength(3)])

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue : string) => {
     if (!this.search.invalid){
       this.searchEvent.emit(searchValue);
     }
    
    })
  }
getErrorMessage() {
  return this.search.hasError('minlength') ? 'Type three or more characters in the search box' : '';
}
}
