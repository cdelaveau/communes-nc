import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommunesListComponent } from "./communes-list/communes-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommunesListComponent, HttpClientModule]
})
export class AppComponent {
  title = 'communes-nc';
}
