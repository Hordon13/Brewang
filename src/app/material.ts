import {MatInputModule, MatButtonModule, MatSelectModule, MatIconModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
  exports: [MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
})

export class MaterialModule {
}
