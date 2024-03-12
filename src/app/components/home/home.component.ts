import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ButtonModule, DialogModule, AboutComponent],
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
