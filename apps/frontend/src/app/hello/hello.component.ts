import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  content?: string;
  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getHello().subscribe((result) => {
      console.log(result.toString());
      this.content = result.toString();
    });
  }
}
