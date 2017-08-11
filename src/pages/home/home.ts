import { Component } from '@angular/core';

import { NavController, Platform, ToastController } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  admobId: any;

  constructor(
    private navController: NavController,
    private toastCtrl: ToastController,
    private adMobFree: AdMobFree
  ) {
    }

    createBanner() {
      let toast = this.toastCtrl.create({
        message: 'Creating your ad',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        isTesting: true,
        autoShow: true
      };
      this.adMobFree.banner.config(bannerConfig);

      this.adMobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));

    }

    showInterstitial() {
        this.adMobFree.interstitial.config({
          id: 'ca-app-pub-xxx/xxx',
          autoShow: true
        });
        this.adMobFree.interstitial.prepare();
    }

    removeBanner() {
        this.adMobFree.banner.hide();
    }
}
