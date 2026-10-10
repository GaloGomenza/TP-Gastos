import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Gasto } from '../interface/Gasto';

@Service()
export class GastoService
{
  http = inject(HttpClient);

  gastos = signal<Gasto[]>([]);

  url:string = 'http://localhost:3000/gastos';

  listGastos(){
    this.http.get<Gasto[]>(this.url).subscribe(
      data => {
        this.gastos.set(data);
      }
    )
  }

  add(gasto: Omit<Gasto, 'id'>)
  {
    this.http.post(this.url, gasto).subscribe(
      () => {
        this.listGastos();
      }
    )
  }
}
