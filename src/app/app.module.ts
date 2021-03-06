import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EditProfileComponent } from './Pages/dashboard/edit-profile/edit-profile.component';
import { OverviewPageComponent } from './Pages/dashboard/overview-page/overview-page.component';
import { UpdateMenuComponent } from './Pages/dashboard/update-menu/update-menu.component';
import { CustomerListComponent } from './Pages/dashboard/customer-list/customer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { StorageServiceModule} from 'angular-webstorage-service';
import { UploadServiceService } from './Pages/database/uploadService/upload-service.service';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { LottieAnimationViewModule } from 'ng-lottie';
import { NgxSpinnerModule } from "ngx-spinner";
import { AuthService } from './Pages/database/auth/auth.service';
import { Observable } from 'rxjs';
import { map, filter, finalize } from 'rxjs/operators';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    EditProfileComponent,
    OverviewPageComponent,
    UpdateMenuComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    LottieAnimationViewModule.forRoot(),
    BrowserAnimationsModule,
    ImageCropperModule,
    StorageServiceModule,
    AngularFireStorageModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthService,
    UploadServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
