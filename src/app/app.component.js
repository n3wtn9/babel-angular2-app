import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
    `
})

export class AppComponent {
    constructor() {
        this.mytitle = 'Tour of Heros';

        this.myhero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    get title() { return this.mytitle; }
    get hero() { return this.myhero; }
}