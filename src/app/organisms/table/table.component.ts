import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from '../../models/movie.model';
import { DataService } from '../../services/data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = [];
  fullDisplayedColumns: string[] = ['tconst', 'titleType', 'primaryTitle', 'originalTitle', 'isAdult', 'startYear', 'endYear',
  'runTimeMinutes', 'genres', 'edit'];
  reducedDisplayedColumns: string[] = ['primaryTitle','startYear','genres','edit'];  
  dataSource: MatTableDataSource<Movie>;
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService, public dialog: MatDialog,public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
          this.reducedDisplayedColumns : 
          this.fullDisplayedColumns;
    });
    this.dataService.loadDataObservable$.subscribe(() => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<Movie>(this.dataService.movies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClick(element: Movie){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50vw',
      height: '80vh',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) Object.assign(element,result);
      
      
    });
    
  }

}

