import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Explore page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class Explore {
  exams = [
    { name: 'MCSE', board: 'MPSC (Manipur)', active: true, icon: '' },
    { name: 'HSLC', board: 'BOSEM (Manipur)', active: false, icon: '' },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Explore');
  }

}
