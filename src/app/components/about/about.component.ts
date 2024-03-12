import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule, KnobModule, CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
  value: number = 85;
  valuee: number = 90;
  valueee: number = 85;
  valueeee: number = 85;
  valueeeee: number = 90;
  valueeeeee: number = 95;
  valueeeeeee: number = 75;
  valueeeeeeee: number = 90;
}
