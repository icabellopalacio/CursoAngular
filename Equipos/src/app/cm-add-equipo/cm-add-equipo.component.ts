import { Component, OnInit} from '@angular/core';
import { Equipo } from '../Models/Equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cm-add-equipo',
  templateUrl: './cm-add-equipo.component.html',
  styleUrls: ['./cm-add-equipo.component.css']
})
export class CmAddEquipoComponent implements OnInit {

   // Variables
   // ..................................
   lstEquipos: Array<Equipo>;
   filtroEquipos: string;
   selEquipo: Equipo;
   frmEquipos: FormGroup;

   // Init
   // ..................................
  constructor(private frmBuilder: FormBuilder) {}

  ngOnInit() {
    registerLocaleData(es);
    this.lstEquipos = [ new Equipo('Athletic club'
                                 , 'Bilbao'
                                 , 44100
                                 , new Date(1998, 1, 1)
                                 , 'https://icon-icons.com/icons2/1637/PNG/48/athletic-bilbao_109476.png'),
                        new Equipo('F.C. Barcelona'
                                 , 'Barcelona'
                                 , 98000
                                 , new Date(1999, 1, 1)
                                 , 'https://icon-icons.com/icons2/1637/PNG/48/barcelona_109494.png') ];
    this.filtroEquipos = '';
    this.buildForm();
    this.selEquipo = new Equipo(null, null, null, null, null);
  }
  private buildForm() {
    this.frmEquipos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Ciudad: ['', Validators.required],
      Socios: [null, Validators.required],
      Fundacion: [null , Validators.required],
      Escudo: ['']
    });
  }

  // Functions
   // ..................................
  setEquipo() {
    this.lstEquipos.push(new Equipo(this.frmEquipos.value.Nombre
                                    , this.frmEquipos.value.Ciudad
                                    , this.frmEquipos.value.Socios
                                    , this.frmEquipos.value.Fundacion
                                    , this.frmEquipos.value.Escudo));
    this.frmEquipos.reset();
  }

  numSocios(parNumSocios: number ): string {
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light border-left border-primary';
       }
  }

  showDetail(itemDetail: Equipo): void {
    this.selEquipo = itemDetail;
  }

 

}
