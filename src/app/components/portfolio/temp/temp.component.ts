import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { Subscription } from 'rxjs';
import { temp1 } from '../../../../core/interface/temp1.interface';
import { temp2 } from '../../../../core/interface/temp2.interface';
import { temp3 } from '../../../../core/interface/temp3.interface';
import { temp4 } from '../../../../core/interface/temp4.interface';
import { temp5 } from '../../../../core/interface/temp5.interface';
import { Temp2Service } from '../../../../services/temp2.service';
import { Temp3Service } from '../../../../services/temp3.service';
import { Temp4Service } from '../../../../services/temp4.service';
import { Temp5Service } from '../../../../services/temp5.service';
import { TemponeService } from '../../../../services/tempone.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [DialogModule, GalleriaModule, CommonModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TempComponent {
  visbleTemp1: boolean = false;
  visbleTemp2: boolean = false;
  visbleTemp3: boolean = false;
  visbleTemp4: boolean = false;
  visbleTemp5: boolean = false;
  temp1Subscription!: Subscription;
  temp1: temp1[] | any = [];
  temp2Subscription!: Subscription;
  temp2: temp2[] | any = [];
  temp3Subscription!: Subscription;
  temp3: temp3[] | any = [];
  temp4Subscription!: Subscription;
  temp4: temp4[] | any = [];
  temp5Subscription!: Subscription;
  temp5: temp5[] | any = [];
  constructor(
    private temponeService: TemponeService,
    private temptwoService: Temp2Service,
    private tempthreeservice: Temp3Service,
    private tempfourService: Temp4Service,
    private tempfiveService: Temp5Service
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
  showDialogTemp1() {
    this.visbleTemp1 = true;
  }
  showDialogTemp2() {
    this.visbleTemp2 = true;
  }
  showDialogTemp3() {
    this.visbleTemp3 = true;
  }
  showDialogTemp4() {
    this.visbleTemp4 = true;
  }
  showDialogTemp5() {
    this.visbleTemp5 = true;
  }
  ngOnInit(): void {
    this.getTemp1();
    this.getTemp2();
    this.getTemp3();
    this.getTemp4();
    this.getTemp5();
  }
  getTemp1(): void {
    this.temp1Subscription = this.temponeService.getTemp1().subscribe({
      next: (res: HttpResponse<temp1[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.temp1 = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getTemp2(): void {
    this.temp2Subscription = this.temptwoService.getTemp2().subscribe({
      next: (res: HttpResponse<temp2[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.temp2 = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getTemp3(): void {
    this.temp3Subscription = this.tempthreeservice.getTemp3().subscribe({
      next: (res: HttpResponse<temp3[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.temp3 = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getTemp4(): void {
    this.temp4Subscription = this.tempfourService.getTemp4().subscribe({
      next: (res: HttpResponse<temp4[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.temp4 = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getTemp5(): void {
    this.temp5Subscription = this.tempfiveService.getTemp5().subscribe({
      next: (res: HttpResponse<temp5[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.temp5 = res.body;
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
    if (this.temp1Subscription && this.temp1Subscription.closed) {
      this.temp1Subscription.unsubscribe();
    }
    if (this.temp2Subscription && this.temp2Subscription.closed) {
      this.temp2Subscription.unsubscribe();
    }
    if (this.temp3Subscription && this.temp3Subscription.closed) {
      this.temp3Subscription.unsubscribe();
    }
    if (this.temp4Subscription && this.temp4Subscription.closed) {
      this.temp4Subscription.unsubscribe();
    }
    if (this.temp5Subscription && this.temp5Subscription.closed) {
      this.temp5Subscription.unsubscribe();
    }
  }
}
