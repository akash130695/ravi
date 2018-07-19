import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SyncPage } from '../pages/sync/sync';
import { PrintPage } from '../pages/print/print';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { PrintSetupPage } from '../pages/print-setup/print-setup';
import { NativeStorage } from '@ionic-native/native-storage';
import { POsecondPage } from '../pages/p-osecond/p-osecond';
import { POthirdPage } from '../pages/p-othird/p-othird';
import { POfirstPage } from '../pages/p-ofirst/p-ofirst';
import { ChatPage } from '../pages/chat/chat';
import { ChatDescPage } from '../pages/chat-desc/chat-desc';
import { AddCommentPage } from '../pages/add-comment/add-comment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckoutPage } from '../pages/checkout/checkout';
import { FinalReceiptPage } from '../pages/final-receipt/final-receipt';
import { OfflineinvoicePage } from '../pages/offlineinvoice/offlineinvoice';
import { PoscashinvoicePage } from '../pages/poscashinvoice/poscashinvoice';
import { Printer } from '@ionic-native/printer';
import { Network } from '@ionic-native/network';
import { NetworkManagerProvider } from '../providers/network-manager/network-manager';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SyncPage,
    PrintPage,
    PrintSetupPage,
    POfirstPage,
    POsecondPage,
    POthirdPage,
    ChatPage,
    ChatDescPage,
    AddCommentPage,
    CheckoutPage,
    FinalReceiptPage,
    OfflineinvoicePage,
    PoscashinvoicePage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SyncPage,
    PrintPage,
    PrintSetupPage,
    POfirstPage,
    POsecondPage,
    POthirdPage,
    ChatPage,
    ChatDescPage,
    AddCommentPage,
    CheckoutPage,
    FinalReceiptPage,
    OfflineinvoicePage,
    PoscashinvoicePage
  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider,
    NativeStorage,
    Printer,
    Network,
    NetworkManagerProvider
  ]
})
export class AppModule { }
