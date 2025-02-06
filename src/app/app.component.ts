import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  skills = [
    { name: 'Java', value: 90 },
    { name: 'Spring Boot', value: 85 },
    { name: 'Angular', value: 95 },
    { name: 'React', value: 80 },
  ];

  projects = [
    {
      name: 'Gummadibuilt',
      description: 'An e-procurement platform for vendors and clients.',
      image: 'assets/gummadibuilt.png',
      link: 'https://gummadibuilt.com',
    },
    {
      name: 'Learning Management System',
      description: 'A platform for managing courses and exams.',
      image: 'assets/lms.png',
      link: 'https://example.com/lms',
    },
  ];
}
