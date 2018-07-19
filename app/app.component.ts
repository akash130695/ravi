import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ServiceProvider } from '../providers/service/service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public serv: ServiceProvider) {
    platform.ready().then(() => {
      // this.serv.disconnectInternet();
      // this.serv.connectInternet();
      this.serv.demo();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

