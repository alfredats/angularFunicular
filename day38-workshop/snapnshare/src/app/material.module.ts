import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const materialMods: any[] = [MatFormFieldModule, MatButtonModule];

@NgModule({
  imports: materialMods,
  exports: materialMods,
})
export class MaterialModule {}
