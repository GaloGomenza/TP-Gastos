import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { GastoService } from "../../service/gasto-service";
import { Gasto } from "../../interface/Gasto";

@Component({selector: 'app-gasto-create', templateUrl: 'gasto-create.html', styleUrl: 'gasto-create.css', imports: [ReactiveFormsModule]})
export class GastoCreate
{
  gastosService = inject(GastoService);

  fb:FormBuilder = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    descripcion: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    monto: [0, [Validators.required]]
  })

  add()
  {
    if (this.formulario.invalid)
      return;

    let gasto:Omit<Gasto, 'id'> = {
      descripcion: this.formulario.controls.descripcion.value,
      categoria: this.formulario.controls.categoria.value,
      monto: this.formulario.controls.monto.value
    }

    this.gastosService.add(gasto);
  }
}
