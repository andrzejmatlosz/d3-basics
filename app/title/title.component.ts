import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-title',
    templateUrl: 'app/title/title.component.html',
    styleUrls: [ 'app/title/title.component.css' ]
})
export class TitleComponent {
    @Input() userName: string;
}