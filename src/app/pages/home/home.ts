import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { ModalController } from '@ionic/angular';
// import { ModalPage } from './modal';


declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager: TitleBarPlugin.TitleBarManager;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  // public modalController: ModalController

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }

  ionViewDidEnter() {
    // When the main screen is ready to be displayed, ask the app manager to make the app visible,
    // in case it was started hidden while loading.
    appManager.setVisible("show");

    // Update system status bar every time we re-enter this screen.
    titleBarManager.setTitle("Home");
    titleBarManager.setBackgroundColor("#000000");
    titleBarManager.setForegroundMode(TitleBarPlugin.TitleBarForegroundMode.LIGHT);
  }

//   shopsList:any[]=[{
//     address:'MS Dhoni',image:'https://iplstatic.s3.amazonaws.com/players/284/1.png',role:"Wicketkeeper batsman",
//     phone:"Right-handed",
//     email:"Right-arm medium"
//   },
// {
//   address:'MS Dhoni',image:'https://iplstatic.s3.amazonaws.com/players/284/1.png',role:"Wicketkeeper batsman",
//   phone:"Right-handed",
//   email:"Right-arm medium"
// }]
}



// @Component({
//   selector: 'modal-example',
//   templateUrl: 'modal-example.html',
//   styleUrls: ['./modal-example.css']
// })
// export class ModalExample {
//   constructor(public modalController: ModalController) {

//   }

//   async presentModal() {
//     const modal = await this.modalController.create({
//       component: ModalPage,
//       cssClass: 'my-custom-class'
//     });
//     return await modal.present();
//   }
// }