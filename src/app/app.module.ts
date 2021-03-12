import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabelComponent } from './atoms/label/label.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { TitleComponent } from './atoms/title/title.component';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HeaderComponent } from './molecules/header/header.component';
import { TableComponent } from './organisms/table/table.component';
import { CellComponent } from './atoms/cell/cell.component';
import { CollComponent } from './molecules/coll/coll.component';
import { ThcellComponent } from './atoms/thcell/thcell.component';
import { TdcellComponent } from './atoms/tdcell/tdcell.component';
import {MatTableModule} from '@angular/material/table';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ModalComponent } from './organisms/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { SpinnerComponent } from './atoms/spinner/spinner.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    LogoComponent,
    TitleComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    TableComponent,
    CellComponent,
    CollComponent,
    ThcellComponent,
    TdcellComponent,
    ModalComponent,
    SpinnerComponent,
    MainPageComponent
   ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: moviesProviderFactory,
      deps: [DataService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function moviesProviderFactory(moviesProvider: DataService) {
  return () => moviesProvider.Init();
}