import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Page One',
      url: '/pageOne',
      icon: 'logo-angular'
    },
    {
      title: 'Page Two',
      url: '/pageTwo',
      icon: 'logo-apple'
    },
    {
      title: 'Page Three',
      url: '/pageThree',
      icon: 'logo-android'
    },
    {
      title: 'Page Four',
      url: '/pageFour',
      icon: 'lock'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
