import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Atributs } from 'src/app/components/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  atributs: Observable<Atributs[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.atributs = this.dataService.getMenuOpts();
  }

  toogleMenu(){
    this.menuCtrl.toggle();
  }
}
