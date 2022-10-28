import {Component} from '@angular/core';
import {IngresoServicio} from './ingreso/ingreso.servicio';
import {EgresoServicio} from './egreso/egreso.servicio';
import {Ingreso} from './ingreso/ingreso.model';
import {Egreso} from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresosTotal(): number {
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }


  getEgresoTotal(): number {
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresosTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresosTotal() - this.getEgresoTotal();
  }

}
