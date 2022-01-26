import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CancionService } from '../cancion.service';
import { CommonService } from '../common.service';
import { Cancion } from '../model/model';

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {
  formSong = new FormGroup({});
  id?: String;

  constructor(
    private formBuilder: FormBuilder,
    private songSvc: CancionService,
    private commonSvc: CommonService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    this.formSong = this.formBuilder.group({
      Nombre:['',[Validators.required]],
      Autor:['',Validators.required],
      Artista:['',],
      Year:['',],
      Duracion:['',Validators.required]
    });

    this.route.params.subscribe((parameters) => {
      if (parameters['id']) {
        this.id = parameters['id'];
        this.commonSvc.loading.next(true);
        this.songSvc.getSingleSong(this.id!).subscribe((response) => {
          this.formSong.patchValue(response);
          this.commonSvc.loading.next(false);
        });
      }
    });
  }

  ngOnInit(): void {}

  save(): void {
    this.commonSvc.loading.next(true);
    const song = this.formSong.value as Cancion;

    if (this.id) {
      this.songSvc.editSong(this.id, song).subscribe(() => {
        this.onSuccess();
      });
    } else {
      this.songSvc.saveSong(song).subscribe(() => {
        this.onSuccess();
      });
    }
  }

  onSuccess(): void {
    this.commonSvc.loading.next(false);
    this.router.navigate(['Canciones']);
  }

}
