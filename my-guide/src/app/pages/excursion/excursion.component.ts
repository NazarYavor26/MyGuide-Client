import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/app/models/user';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css'],
  providers: [HttpService]
})
export class ExcursionComponent implements OnInit {

  user: User | undefined;
  city: City | undefined;

  constructor(private httpService: HttpService) { } 

  ngOnInit() {
    this.httpService.getData().subscribe({next:(data:any) => this.city=new City(data.name, data.description)});
  }

}
