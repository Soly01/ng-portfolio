import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { api } from '../../../../core/interface/api.interface';
import { pic } from '../../../../core/interface/dashboard.interface';
import { image } from '../../../../core/interface/e-commerce.interface';
import { hang } from '../../../../core/interface/hang.interface';
import { memory } from '../../../../core/interface/memory.interface';
import { quiz } from '../../../../core/interface/quiz.interface';
import { slider } from '../../../../core/interface/slider.interface';
import { speed } from '../../../../core/interface/speed.interface';
import { todo } from '../../../../core/interface/todo.interface';
import { ApiService } from '../../../../services/api.service';
import { HangService } from '../../../../services/hang.service';
import { MemoryService } from '../../../../services/memory.service';
import { PortfolioService } from '../../../../services/portfolio.service';
import { QuizService } from '../../../../services/quiz.service';
import { SliderService } from '../../../../services/slider.service';
import { SpeedService } from '../../../../services/speed.service';
import { TodoService } from '../../../../services/todo.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [DialogModule, GalleriaModule, CommonModule],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JavaComponent {
  visibleportfolio: boolean = false;
  visiblegit: boolean = false;
  visbleQuiz: boolean = false;
  visbleHang: boolean = false;
  visbleSpeed: boolean = false;
  visbleTodo: boolean = false;
  visbleMemory: boolean = false;
  visbleSlider: boolean = false;
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
  constructor(
    private portfolioService: PortfolioService,
    private apiService: ApiService,
    private quizService: QuizService,
    private hangService: HangService,
    private speedService: SpeedService,
    private todoService: TodoService,
    private memoryService: MemoryService,
    private sliderService: SliderService
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
  ngOnInit(): void {
    this.getPortfolio();
    this.getApi();
    this.getQuiz();
    this.getHang();
    this.getSpeed();
    this.getTodo();
    this.getMemory();
    this.getSlider();
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
}
