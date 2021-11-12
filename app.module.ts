import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpaceGalleryComponent } from './space-gallery/space-gallery.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import {MatTableModule} from '@angular/material/table';
import { BookingJourneyComponent } from './booking-journey/booking-journey.component';
import { HttpClientModule} from '@angular/common/http';
import { PlanetDeatilsComponent } from './planet-deatils/planet-deatils.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { SingleBookingComponent } from './single-booking/single-booking.component';
import {MatBadgeModule} from '@angular/material/badge';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    AdminLoginComponent,
    SpaceGalleryComponent,
    JourneyDetailsComponent,
    BookingJourneyComponent,
    PlanetDeatilsComponent,
    AdminChatComponent,
    ClientChatComponent,
    SingleBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FlexLayoutModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,MatDialogModule,
    MatToolbarModule,MatButtonModule,MatIconModule,ReactiveFormsModule,FormsModule,MatSnackBarModule,MatTableModule,HttpClientModule,MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
