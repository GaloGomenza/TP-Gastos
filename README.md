# TP Gastos

Aplicación Angular para **cargar** gastos personales con un formulario reactivo y **listarlos**, persistiendo los datos en un backend simulado con `json-server`.

## Tecnologías

- Angular 22
- Reactive Forms
- HttpClient
- json-server@0.17.4

El `id` no se carga a mano en el formulario: lo genera automáticamente json-server.

- La interfaz `Gasto` declara `id: number`.
- El formulario solo pide `descripcion`, `categoria` y `monto`.
- Al enviar, el componente arma un objeto tipado como `Omit<Gasto, 'id'>` y lo manda al service.
- `GastoService.add()` hace un POST a `http://localhost:3000/gastos`. json-server recibe el objeto, le asigna el id y lo guarda en `db/gastos.json`.
- Al terminar el POST, `add()` vuelve a llamar a `listGastos()`. El listado se refresca solo, sin recargar la página.