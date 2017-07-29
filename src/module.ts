import { EllipsifyDirective } from './ellipsify.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
export * from './ellipsify.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [EllipsifyDirective],
    exports: [EllipsifyDirective]
})
export class EllipsifyModule { }
