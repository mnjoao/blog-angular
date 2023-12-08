import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./componentes/small-card/small-card.component";
import { MenuTitleComponent } from "./componentes/menu-title/menu-title.component";
import { BigCardComponent } from "./componentes/big-card/big-card.component";
import { MenuBarComponent } from "./componentes/menu-bar/menu-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SmallCardComponent, MenuTitleComponent, BigCardComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'angular-blog';
}
