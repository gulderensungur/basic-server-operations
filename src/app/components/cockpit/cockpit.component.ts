import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  serverName: string = 'Testserver';
  serverContent: string = 'Some content';

  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;

  @Output() createServer = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() createBlueprint = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addServer(serverInput: HTMLInputElement) {
    this.createServer.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  addServerBlueprint(serverInput: HTMLInputElement) {
    this.createBlueprint.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
