import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input() element!: { type: string; name: string; content: string };

  @Input() name!: string;
  constructor() {}

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges works!');
    console.log(change);
  }
  ngOnInit(): void {}

  ngDoCheck() {
    console.log('ngDoCheck works!');
  }

  ngOnDestroy() {
    console.log('OnDestroy works!');
  }
}
