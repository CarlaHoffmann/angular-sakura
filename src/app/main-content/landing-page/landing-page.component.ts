import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <div><app-navbar></app-navbar></div>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    // styleUrls: ['./landing-page.component.scss']
    styleUrl: './landing-page.component.scss' 
})
export class LandingPageComponent {}