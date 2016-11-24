import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// import { Http } from '@angular/http'

// custom components / pages
import { MainOverviewPage } from '../pages/main-overview/main-overview';
import { AddEditViewPage } from '../pages/add-edit-view/add-edit-view';
import { AdminOverviewPage } from '../pages/admin-overview/admin-overview';
import { RegisterViewPage } from '../pages/register-view/register-view';

// custom providers / serrvices
import { AlarmOverviewService } from '../providers/alarm.overview.service'
import { AlarmOverviewServiceMocks } from '../providers/mocks/alarm.overview.service.mocks'
import { AuthService } from '../providers/auth.service'

@NgModule({
  declarations: [
    MyApp,
    // custom declarations
    MainOverviewPage,
    AddEditViewPage,
    AdminOverviewPage,
    RegisterViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // custom
    MainOverviewPage,
    AddEditViewPage,
    AdminOverviewPage,
    RegisterViewPage
  ],
  providers: [
    // create const USE_MOCKS, to indicate that mocks should be used instead of _real_ services 
    { provide: 'USE_MOCKS', useValue: true },

    // use factory to avoid changing from mocks to real services in components
    {
      provide: AlarmOverviewService, useClass: AlarmOverviewServiceMocks
      // avoid using factory yet, since build will fail with: Function calls are not supported
      // useFactory: (USE_MOCKS, http) => USE_MOCKS ? new AlarmOverviewServiceMocks() : new AlarmOverviewService(http),
      // deps: ['USE_MOCKS', Http]
    },
    AuthService
  ]
})
export class AppModule { }
