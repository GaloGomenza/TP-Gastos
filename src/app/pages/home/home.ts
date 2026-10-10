import { Component } from "@angular/core";
import { GastoCreate } from "../../components/gasto-create/gasto-create";
import { GastoList } from "../../components/gasto-list/gasto-list";

@Component({selector: 'app-home', templateUrl: 'home.html', styleUrl: 'home.css',
imports: [GastoCreate, GastoList]})
export class Home{

}
