import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Atributs } from '../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  atributs: Observable<Atributs[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.atributs = this.dataService.getMenuOpts();
  }
}
