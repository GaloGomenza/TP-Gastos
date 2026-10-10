import { Component, OnInit, inject } from "@angular/core";
import { GastoService } from "../../service/gasto-service";

@Component({selector: 'app-gasto-list', templateUrl: 'gasto-list.html', styleUrl: 'gasto-list.css'})
export class GastoList implements OnInit
{
  gastoService = inject(GastoService);

  ngOnInit():void
  {
    this.gastoService.listGastos();
  }
}
