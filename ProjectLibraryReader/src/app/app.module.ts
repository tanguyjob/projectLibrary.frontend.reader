import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './services/authentification.service';
import { AuthgardService } from './services/authgard.service';
import { CartComponent } from './cart/cart.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { OrderedComponent } from './ordered/ordered.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    BookComponent,
    AuthorComponent,
    ProfileDetailComponent,
    ProfileComponent,
    LoginComponent,
    CartComponent,
    CartMenuComponent,
    BookDetailComponent,
    OrderedComponent,
    AuthorDetailComponent,
    TestModalComponent,
    NotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'book', component: BookComponent},
      { path: 'book-detail/:id', component: BookDetailComponent},
      { path: 'author', component: AuthorComponent},
      { path: 'profile',canActivate:[AuthgardService], component: ProfileComponent},
      { path: 'login', component: LoginComponent},
      { path: 'cart', canActivate:[AuthgardService], component: CartComponent},
      { path: 'ordered', component: OrderedComponent},
      { path: 'author-detail/:id', component: AuthorDetailComponent},
      { path: 'modal', component: TestModalComponent},
      { path: 'notfound', component: NotFoundComponent},
      { path:'**', redirectTo: 'notfound'}
    ]),
    NgbModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
