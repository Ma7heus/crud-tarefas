import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


export const routes: Routes = [
    { path: 'task-form', component: FormComponent },
    { path: 'task-list', component: ListComponent }
];
