import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftSideMenuComponent } from './layout/left-side-menu/left-side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LeftSideMenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,RouterModule.forRoot([]),MatToolbarModule,MatButtonModule,
    MatIconModule,MatMenuModule,MatCardModule,MatInputModule,MatFormFieldModule,MatListModule,
    MatDividerModule,MatExpansionModule,MatDialogModule,MatSnackBarModule,MatTableModule,MatPaginatorModule,
    MatSortModule,MatSelectModule,MatCheckboxModule,MatRadioModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
