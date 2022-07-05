### View Encapsulation:

Every component has it’s own css file. So, if I want to change some global styles and if I add in app.component.css file, there won’t be any change. Because, Angular prevents changing global styles. This reason is view encapsulation. Each component creates different id's for the same elements in itself. _(Ex. \_ngContent-tw-45)._ So changes that do a component don’t affect the other components. Because each element has a different ngContent id. If we prevent this, we add this code to component:

```jsx
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
	encapsulation: ViewEncapsulation.None
//default value of ViewEncasulation is Emulated.

})
```

### Local Reference:

Local reference is an alternative that use instead of ngModel. Even we can use local references for every element, not only input. It is very useful if you are going to use the value you get in the component in the same component.

```tsx
<input type="text" class="form-control" #serverInput />
    <button class="btn btn-primary" (click)="addServer(serverInput)">
      Add server
    </button>
```

```tsx
addServer(serverInput: HTMLInputElement) {
    this.createServer.emit({
      serverName: serverInput.value,
      serverContent: this.serverContent,
    });
  }
```

### @ViewChild:

If we want to access to local references directly in ts file, we use @ViewChild

```tsx
@ViewChild('serverContentInput') serverContentInput: any;

  constructor() {}

  ngOnInit(): void {}

  addServer(serverInput: HTMLInputElement) {
    this.createServer.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
```

### ngContent:

Assume that, we have a complex html code in the component an we want to prevent complexity. So, between the tags where the component is called, we can call some code blocks.

```tsx
<app-server-element
        *ngFor="let serverElement of serverElements"
        [element]="serverElement"
      >
        <p>
          <strong *ngIf="serverElement.type === 'server'" style="color: red">{{
            serverElement.content
          }}</strong>
          <em *ngIf="serverElement.type === 'blueprint'">{{
            serverElement.content
          }}</em>
        </p>
</app-server-element>
```

We moved some code blocks to app.component.html from cockpit.component.html. But in this scenario, we will loose some data because of the Angulars default behavior. So, we use ngContent in source html code, cockpit.html. We add these tags `<ng-cotent></ng-content>` This codes means, if there is a code block between the tags where this component is called, take it and place it here.

### Lifecycle Hook:

- **ngOnChanges():** Called after a bound input property changes. It takes parameter in.

```tsx
ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges works!');
    console.log(change);
  }
```

- **ngOnInit:** Called once the component is initialized (every render)
- **ngDoCheck:** Called during every change detection run.
- **ngAfterContentInit:** Called after content (ng-content) has been projected into view
- **ngAfterContentChecked:** Called every time the projected content has been checked
- **ngAfterViewInit:** Called after the component’s view (and child views) has been initialized
- **ngAfterViewChecked:** Called every time the view (and child views) have been checked
- **ngOnDestroy:** Called once the component is about to be destroyed.
