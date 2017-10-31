import { MtwitterPageModule } from './../pages/mtwitter/mtwitter.module';
import { MfacebookPageModule } from './../pages/mfacebook/mfacebook.module';
import { SociaciauxPageModule } from './../pages/sociaciaux/sociaciaux.module';
import { SociaciauxPage } from './../pages/sociaciaux/sociaciaux';
import { Safe } from './../pipes/safe';
import { Youtube } from './../providers/youtube';
import { VideopipePipe } from './../pipes/videopipe/videopipe';
import { BookingServicePage } from './../pages/booking-service/booking-service';
import { BookingBranchPage } from './../pages/booking-branch/booking-branch';
import { MobileServer } from './../providers/mobileserver';
import { Restservice } from './../providers/restservice';
import { GlobalVars } from './../providers/global';
import { Common } from './../providers/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Settings } from './../providers/settings';
import { ErrorComponent } from './../components/error/error';
import { PopoverPage } from './../pages/popover/popover';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MarketingPage } from '../pages/marketing/marketing';
import { Parametre } from '../pages/parametre/parametre';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { BackgroundMode } from '@ionic-native/background-mode';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Http } from '@angular/http'
import { AppMinimize } from '@ionic-native/app-minimize';
import { createTranslateLoader } from "../providers/createTranslateLoader";
//new Import ionic 3
import { BrowserModule } from '@angular/platform-browser'
import { Geolocation } from '@ionic-native/geolocation';
import { DistanceCalculatorProvider } from '../providers/distance-calculator/distance-calculator';
import { TimerComponent } from '../components/timer/timer';
import { CalendarPage } from "../pages/booking-calendar/calendar";
import { ServicePage } from "../pages/ticket-service/service";
import { ListagencePage } from "../pages/ticket-listagence/listagence";
import { Showticket } from "../pages/ticket-showticket/showticket";
import { DelayTicketPage } from "../pages/ticket-delay/delay-ticket";
import { InfoClientPage } from "../pages/booking-info-client/info-client";
import { ResumeBookPage } from "../pages/booking-resume/resume-book";
import { TimerCountPage } from "../pages/ticket-timer-count/timer-count";

@NgModule({
  declarations: [
    MyApp,
    Showticket,
    ContactPage,
    HomePage,
    ListagencePage,
    MarketingPage,
    Parametre,
    ServicePage,
    PopoverPage,
    ErrorComponent,
    DelayTicketPage,
    InfoClientPage,
    ResumeBookPage,
    TimerComponent,
    TimerCountPage,
    CalendarPage,
    BookingBranchPage,
    BookingServicePage,
    VideopipePipe,
    Safe,
    // SociaciauxPage
  ],
  imports: [HttpModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    SociaciauxPageModule,
    MfacebookPageModule,
    MtwitterPageModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Showticket,
    ContactPage,
    HomePage,
    ListagencePage,
    MarketingPage,
    Parametre,
    ServicePage,
    PopoverPage,
    DelayTicketPage,
    InfoClientPage,
    ResumeBookPage,
    TimerCountPage,
    CalendarPage,
    BookingBranchPage,
    BookingServicePage,
    // SociaciauxPage
  ],
  providers: [SplashScreen,
    StatusBar,
    Settings,
    Restservice,
    MobileServer,
    Common,
    GlobalVars,
    BackgroundMode,
    AppMinimize,
    Youtube,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    DistanceCalculatorProvider]
})
export class AppModule { }
