import { Routes } from '@angular/router';
import {Vitrine} from './vitrine/vitrine';
import {Login} from './login/login';
import {Esqueci} from './esqueci/esqueci';
import {Detalhe} from './detalhe/detalhe';
import {Cesta} from './cesta/cesta';
import {Busca} from './busca/busca';
import {Cadastro} from './cadastro/cadastro'
import{Resultadobusca} from './resultadobusca/resultadobusca'
import { Sobrenos } from './sobrenos/sobrenos'
import {Destaque} from './destaque/destaque'

export const routes: Routes = [
    {path:'', component: Vitrine},
    {path:'login', component: Login},
    {path:'esqueci', component: Esqueci},
    {path:'detalhe', component: Detalhe},
    {path:'cesta', component: Cesta},
    {path:'busca', component: Busca},
    {path:'cadastro', component:Cadastro},
    {path:'resultadobusca', component: Resultadobusca},
    {path:'sobrenos', component: Sobrenos},
   {     path:'destaque', component: Destaque}
]
