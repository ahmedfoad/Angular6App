import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  Value: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getValue();
  }


  getValue = (): void => {
    this.http.get('http://localhost:2021/api/value/').subscribe(response => {
    this.Value = response;
  }, error => {
    console.log(error);
  });
}



}
