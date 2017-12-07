import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveStackTableDirective } from './responsive-stack-table.directive';

export * from './responsive-stack-table.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResponsiveStackTableDirective
  ],
  exports: [
    ResponsiveStackTableDirective
  ]
})
export class NgxResponsiveStackTableModule
{
  static forRoot (): ModuleWithProviders
  {
    return {
      ngModule: NgxResponsiveStackTableModule
    };
  }
}
