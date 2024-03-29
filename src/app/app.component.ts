import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideComponent } from './components/side/side.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService],
})
export class AppComponent {
  title = 'portfolio';

  currentTheme!: string;

  ngOnInit() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme() {
    document.body.setAttribute('data-theme', this.currentTheme);
  }
}
