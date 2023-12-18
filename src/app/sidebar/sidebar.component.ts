import { Component, Input, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    const body = document.body;
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.renderer.addClass(body, 'layout-navbar-fixed');
    this.renderer.addClass(body, 'layout-footer-fixed');
  }

  ngOnInit(): void {}
  @Input() moduleName: string = "";
}



