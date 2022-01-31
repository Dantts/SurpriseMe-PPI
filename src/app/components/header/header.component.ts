import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() scrollMove: boolean = false;
  @Input() needSearch: boolean = true;
  searchIcon = faSearch;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchAnime(text: string) {
    this.router.navigate(['/search'], { queryParams: { name: text } });
  }
}
