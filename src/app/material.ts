import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatChipsModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule
  ]
})

export class MaterialModule {
}
