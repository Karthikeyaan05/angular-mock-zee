import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  name = 'Angular ' + VERSION.major;
  dataList: any = [];
  clickedRowIndex: number;
  filterTerm: string = '';

  ngOnInit(): void {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe((response: any) => {
        console.log(response);
        this.dataList = response;
      });
  }

  onEditRow(index) {
    this.filterTerm = '';
    this.clickedRowIndex = index;
  }

  onDeleteRow(index) {
    this.filterTerm = '';
    this.dataList.forEach((value, key) => {
      if (index == key) {
        console.log(index, key);
        this.dataList.splice(index, 1);
      }
    });
  }
}
