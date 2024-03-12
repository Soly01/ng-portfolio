import { Component, ViewEncapsulation } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent {
  constructor(private router: Router) {
    router.navigate(['portfolio/all']);
  }
}
