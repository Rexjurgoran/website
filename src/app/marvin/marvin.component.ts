import { Component, HostListener, HostBinding, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-marvin',
  templateUrl: './marvin.component.html',
  styleUrls: ['./marvin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class MarvinComponent implements OnInit {
  private readonly responsive = inject(BreakpointObserver);

  @HostBinding('style.width')
  public width = '80%';

  ngOnInit(): void {
    this.updateWidth();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateWidth();
  }

  private updateWidth(): void {
    this.width = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]) ? '100%' : '80%';
  }
}
