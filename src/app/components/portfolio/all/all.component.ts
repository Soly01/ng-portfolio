import { portfolio } from './../../../../core/interface/portfolio.interface';
import { EcommerceService } from './../../../../services/ecommerce.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { image } from '../../../../core/interface/e-commerce.interface';
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { pic } from '../../../../core/interface/dashboard.interface';
import { DashboardService } from '../../../../services/dashboard.service';
import { PortfolioService } from '../../../../services/portfolio.service';
import { api } from '../../../../core/interface/api.interface';
import { ApiService } from '../../../../services/api.service';
import { quiz } from '../../../../core/interface/quiz.interface';
import { QuizService } from '../../../../services/quiz.service';
import { hang } from '../../../../core/interface/hang.interface';
import { HangService } from '../../../../services/hang.service';
import { SpeedService } from '../../../../services/speed.service';
import { speed } from '../../../../core/interface/speed.interface';
import { todo } from '../../../../core/interface/todo.interface';
import { TodoService } from '../../../../services/todo.service';
import { MemoryService } from '../../../../services/memory.service';
import { memory } from '../../../../core/interface/memory.interface';
import { slider } from '../../../../core/interface/slider.interface';
import { SliderService } from '../../../../services/slider.service';
import { temp1 } from '../../../../core/interface/temp1.interface';
import { TemponeService } from '../../../../services/tempone.service';
import { temp2 } from '../../../../core/interface/temp2.interface';
import { Temp2Service } from '../../../../services/temp2.service';
import { Temp3Service } from '../../../../services/temp3.service';
import { temp3 } from '../../../../core/interface/temp3.interface';
import { temp4 } from '../../../../core/interface/temp4.interface';
import { Temp4Service } from '../../../../services/temp4.service';
import { temp5 } from '../../../../core/interface/temp5.interface';
import { Temp5Service } from '../../../../services/temp5.service';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [DialogModule, GalleriaModule, CommonModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class AllComponent {
  visibleEcommerce: boolean = false;
  visibledash: boolean = false;
  visibleportfolio: boolean = false;
  visiblegit: boolean = false;
  visbleQuiz: boolean = false;
  visbleHang: boolean = false;
  visbleSpeed: boolean = false;
  visbleTodo: boolean = false;
  visbleMemory: boolean = false;
  visbleSlider: boolean = false;
  visbleTemp1: boolean = false;
  visbleTemp2: boolean = false;
  visbleTemp3: boolean = false;
  visbleTemp4: boolean = false;
  visbleTemp5: boolean = false;

  imageSubscription!: Subscription;
  images: image[] | any = [];
  picSubscription!: Subscription;
  pic: pic[] | any = [];
  portfolioSubscription!: Subscription;
  portfolio: pic[] | any = [];
  apiSubscription!: Subscription;
  api: api[] | any = [];
  quizSubscription!: Subscription;
  quiz: quiz[] | any = [];
  hangSubscription!: Subscription;
  hang: hang[] | any = [];
  speedSubscription!: Subscription;
  speed: speed[] | any = [];
  todoSubscription!: Subscription;
  todo: todo[] | any = [];
  memorySubscription!: Subscription;
  memory: memory[] | any = [];
  sliderSubscription!: Subscription;
  slider: slider[] | any = [];
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
    private ecommerceService: EcommerceService,
    private dashService: DashboardService,
    private portfolioService: PortfolioService,
    private apiService: ApiService,
    private quizService: QuizService,
    private hangService: HangService,
    private speedService: SpeedService,
    private todoService: TodoService,
    private memoryService: MemoryService,
    private sliderService: SliderService,
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
  showDialogEcommerce() {
    this.visibleEcommerce = true;
  }
  showDialogdash() {
    this.visibledash = true;
  }
  showDialogportfolio() {
    this.visibleportfolio = true;
  }
  showDialoggit() {
    this.visiblegit = true;
  }
  showDialogQuiz() {
    this.visbleQuiz = true;
  }
  showDialoghang() {
    this.visbleHang = true;
  }
  showDialogSpeed() {
    this.visbleSpeed = true;
  }
  showDialogtodo() {
    this.visbleTodo = true;
  }
  showDialogmemory() {
    this.visbleMemory = true;
  }
  showDialogSlider() {
    this.visbleSlider = true;
  }
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
    this.getPics();
    this.getDash();
    this.getPortfolio();
    this.getApi();
    this.getQuiz();
    this.getHang();
    this.getSpeed();
    this.getTodo();
    this.getMemory();
    this.getSlider();
    this.getTemp1();
    this.getTemp2();
    this.getTemp3();
    this.getTemp4();
    this.getTemp5();
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
  getPortfolio(): void {
    this.portfolioSubscription = this.portfolioService
      .getPortfolio()
      .subscribe({
        next: (res: HttpResponse<image[]>) => {
          if (res.status == 200) {
            console.log('get Data Success');
          }
          console.log(res);
          this.portfolio = res.body;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          if (err.status == 404) {
            console.log(err.statusText);
          }
        },
      });
  }
  getApi(): void {
    this.apiSubscription = this.apiService.getApi().subscribe({
      next: (res: HttpResponse<api[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.api = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getQuiz(): void {
    this.quizSubscription = this.quizService.getQuiz().subscribe({
      next: (res: HttpResponse<quiz[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.quiz = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getHang(): void {
    this.hangSubscription = this.hangService.getHang().subscribe({
      next: (res: HttpResponse<hang[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.hang = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getSpeed(): void {
    this.speedSubscription = this.speedService.getSpeed().subscribe({
      next: (res: HttpResponse<speed[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.speed = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getTodo(): void {
    this.todoSubscription = this.todoService.getTodo().subscribe({
      next: (res: HttpResponse<todo[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.todo = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getMemory(): void {
    this.memorySubscription = this.memoryService.getMemory().subscribe({
      next: (res: HttpResponse<memory[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.memory = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
  }
  getSlider(): void {
    this.sliderSubscription = this.sliderService.getSlider().subscribe({
      next: (res: HttpResponse<slider[]>) => {
        if (res.status == 200) {
          console.log('get Data Success');
        }
        console.log(res);
        this.slider = res.body;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 404) {
          console.log(err.statusText);
        }
      },
    });
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
    if (this.imageSubscription && this.imageSubscription.closed) {
      this.imageSubscription.unsubscribe();
    }
    if (this.picSubscription && this.picSubscription.closed) {
      this.picSubscription.unsubscribe();
    }
    if (this.portfolioSubscription && this.portfolioSubscription.closed) {
      this.portfolioSubscription.unsubscribe();
    }
    if (this.apiSubscription && this.apiSubscription.closed) {
      this.apiSubscription.unsubscribe();
    }
    if (this.quizSubscription && this.quizSubscription.closed) {
      this.quizSubscription.unsubscribe();
    }
    if (this.hangSubscription && this.hangSubscription.closed) {
      this.hangSubscription.unsubscribe();
    }
    if (this.speedSubscription && this.speedSubscription.closed) {
      this.speedSubscription.unsubscribe();
    }
    if (this.todoSubscription && this.todoSubscription.closed) {
      this.todoSubscription.unsubscribe();
    }
    if (this.memorySubscription && this.memorySubscription.closed) {
      this.memorySubscription.unsubscribe();
    }
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
