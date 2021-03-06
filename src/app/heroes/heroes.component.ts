import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes =>
      this.heroes = heroes
    );
  }

  ngOnInit() {
    this.getHeroes();
  }

}
