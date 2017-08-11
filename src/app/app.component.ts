import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { SplashScreen} from "@ionic-native/splash-screen";
import { StatusBar} from "@ionic-native/status-bar";
import { HomePage } from '../pages/home/home';
import { AdMobFree } from '@ionic-native/admob-free';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage : any = HomePage;

  constructor(
    platform: Platform,
    toastCtrl: ToastController,
    public adMobFree: AdMobFree,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      document.addEventListener('onAdFailLoad', function(e){
        let toast = toastCtrl.create({
          message: 'Error creating your ad',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
