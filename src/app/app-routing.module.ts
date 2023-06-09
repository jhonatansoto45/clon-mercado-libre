import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tienda-libre/tienda-libre.module").then(
        (m) => m.TiendaLibreModule
      )
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
