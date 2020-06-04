import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../../modals/my-modal/my-modal.page';


declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager: TitleBarPlugin.TitleBarManager;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {
  dataReturned: any;
  constructor(public navCtrl: NavController, public modalController: ModalController) {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }


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
