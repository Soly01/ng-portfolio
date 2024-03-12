import { CommonModule } from '@angular/common';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { Subscription } from 'rxjs';
import { pic } from '../../../../core/interface/dashboard.interface';
import { image } from '../../../../core/interface/e-commerce.interface';
import { DashboardService } from '../../../../services/dashboard.service';
import { EcommerceService } from '../../../../services/ecommerce.service';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [DialogModule, GalleriaModule, CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AngularComponent {
  visibleEcommerce: boolean = false;
  visibledash: boolean = false;
  imageSubscription!: Subscription;
  images: image[] | any = [];
  picSubscription!: Subscription;
  pic: pic[] | any = [];
  constructor(
    private ecommerceService: EcommerceService,
    private dashService: DashboardService
  ) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  showDialogEcommerce() {
    this.visibleEcommerce = true;
  }
  showDialogdash() {
    this.visibledash = true;
  }
  ngOnInit(): void {
    this.getPics();
    this.getDash();
  }
  getPics(): void {
    this.imageSubscription = this.ecommerceService.getPics().subscribe({
      next: (res: HttpResponse<image[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.images = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getDash(): void {
    this.picSubscription = this.dashService.getDash().subscribe({
      next: (res: HttpResponse<pic[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.pic = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  ngOnDestroy(): void {
    if (this.imageSubscription && this.imageSubscription.closed) {
      this.imageSubscription.unsubscribe();
    }
    if (this.picSubscription && this.picSubscription.closed) {
      this.picSubscription.unsubscribe();
    }
  }
}
