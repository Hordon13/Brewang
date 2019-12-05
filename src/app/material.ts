import {MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatAutocompleteModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatAutocompleteModule],
  exports: [MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatAutocompleteModule],
})

export class MaterialModule {
}
