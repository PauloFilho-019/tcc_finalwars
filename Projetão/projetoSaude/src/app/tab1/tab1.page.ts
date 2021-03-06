import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso : number;
  altura: number;
  imc: number;
  disableButton: boolean;

  
  constructor(
    private modalCtrl: ModalController, private router: Router){
    this.imc = 0;
    this.disableButton = true;


    
  }

  async onclick(){
    const modal = await this.modalCtrl.create({
      component: ModalonePage
    }); 
    const queryParams = {
      imc : this.imc
    }
    localStorage.setItem("imc", JSON.stringify(queryParams));
    modal.present();
  }

  calcularImc(): number {
      let imc = 0;
      let alt = this.altura;
      let pes = this.peso;
        
      this.imc = pes / (alt ** 2);
      alert(this.imc.toFixed(2));
      if (this.imc > 1){
        this.disableButton = false;
      }
      return this.imc;
  }
}
