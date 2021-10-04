import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        NgbModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        FooterComponent
    ]
})
export class SharedModule { }
