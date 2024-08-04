import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
}

