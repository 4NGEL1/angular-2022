import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CancionService } from '../cancion.service';
import { CommonService } from '../common.service';
import { Cancion } from '../model/model';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  displayedColumns = ['nombre','autor','artista','year','duracion','actions'];
  dataSong = new MatTableDataSource<Cancion>();
  constructor(
    private songSvc: CancionService,
    private router : Router,
    private route: ActivatedRoute,
    private commonSvc: CommonService

  ) {
    this.songSvc.getSong().subscribe((response)=>{
      this.dataSong.data = response;
      console.log(response);
    });
   }

  ngOnInit(): void {
  }
  edit(id: string): void {
    this.router.navigate(['CancionDetail', id]);
  }

  delete(id: String): void{
    if (id) {
      this.commonSvc.loading.next(true);
      this.songSvc.deleteSong(id!).subscribe((response) => {
        this.commonSvc.loading.next(false);
      });
    }
    window.location.reload();
  }


}
