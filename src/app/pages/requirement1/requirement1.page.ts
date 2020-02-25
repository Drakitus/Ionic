import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requirement1',
  templateUrl: './requirement1.page.html',
  styleUrls: ['./requirement1.page.scss'],
})
export class Requirement1Page implements OnInit {

  private names: Array<string>;

  constructor(private alertCtrl: AlertController) {
    this.names = ['Marc','Miquel','Jordi','Dani'];
   }

  ngOnInit() {
  }

  async presentConfirm(){
    const alert = await this.alertCtrl.create({
      header: 'ALERTA!!',
      buttons: [
        {
        text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
          }, 
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Botón Ok');
          }
        },
      ],
    })
    await alert.present();
  }

}
