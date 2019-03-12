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
   lstEquipos: Array<Equipo>;
   filtroEquipos: string;
   selEquipo: Equipo;
   frmEquipos: FormGroup;
  constructor(private frmBuilder: FormBuilder) {}

  ngOnInit() {
    registerLocaleData(es);
// tslint:disable-next-line: max-line-length
    this.lstEquipos = [ new Equipo('Athletic club', 'Bilbao', 44100, new Date(1998, 1, 1), 'https://icon-icons.com/icons2/1637/PNG/48/athletic-bilbao_109476.png'),
// tslint:disable-next-line: max-line-length
                        new Equipo('F.C. Barcelona', 'Barcelona', 98000, new Date(1999, 1, 1), 'https://icon-icons.com/icons2/1637/PNG/48/barcelona_109494.png') ];
    this.filtroEquipos = '';
    this.buildForm();
  }

  setEquipo() {
      let newEquipo: Equipo;
      newEquipo.Nombre = this.frmEquipos.get('Nombre');

      this.lstEquipos.push( new Equipo(, this.frmEquipos.get('Cuidad'), this.frmEquipos.get('Socios'),this.frmEquipos.get('Fundacion'), this.frmEquipos.get('Escudo')));
  }

  numSocios(parNumSocios: number ): string {
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light border-left border-primary';
       }
  }

  showDetail(itemDetail: Equipo): void {
    this.selEquipo = itemDetail;
  }

  private buildForm() {
    this.frmEquipos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Ciudad: ['', Validators.required],
      Socios: [null, Validators.required],
      Fundacion: [null ,Validators.required],
      Escudo: [null, Validators.required]
    });

  }

}
