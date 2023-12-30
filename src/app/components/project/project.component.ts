import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [{
    title: 'Darkbox Gallery',
    imageUrl: 'assets/darkbox-icon.svg',
    imageAltText: 'Darkbox gallery logo',
    description: 'Darkbox Gallery is a highly configurable lightbox themed gallery library for Angular applications using the ivy engine (Angular 15+).',
    demoUrl: 'https://darkbox.click/',
    gitUrl: 'https://github.com/failed-successfully/ngx-darkbox-gallery-library'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
