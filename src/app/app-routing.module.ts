import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent} from '../app/log-in/log-in.component'
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingJourneyComponent } from './booking-journey/booking-journey.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleBookingComponent } from './single-booking/single-booking.component';
import { SpaceGalleryComponent } from './space-gallery/space-gallery.component';

const routes: Routes = [
 {path: 'logIn', component: LogInComponent},
 {path: 'signUp', component:SignUpComponent},
 {path: 'adminLogIn', component:AdminLoginComponent},
 {path: 'gallery', component:SpaceGalleryComponent},
 {path: 'journeyDetails', component:JourneyDetailsComponent},
 {path: 'bookingJourney', component:BookingJourneyComponent},
 {path: 'adminChat', component:AdminChatComponent},
 {path: 'singleBook', component:SingleBookingComponent},
 {path: '**', redirectTo: '/logIn', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
