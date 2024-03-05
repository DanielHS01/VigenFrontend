import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedContent: string = 'Contenido 1';
  selectedIndex: number = 0;
  selectContent(content: string, index: number) {
    this.selectedContent = content;
    this.selectedIndex = index;
  }
}
