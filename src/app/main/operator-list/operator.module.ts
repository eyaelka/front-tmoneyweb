import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule, Routes } from "@angular/router";
import { FuseWidgetModule } from "@fuse/components";
import { FuseSharedModule } from "@fuse/shared.module";
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";
import { EcommerceProductsService } from "../products/products.service";
import {OperatorComponent} from './operator.component';

const routes: Routes = [
    {
        path     : 'operator',
        component: OperatorComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    }
]
@NgModule({
    declarations: [
        OperatorComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

       
        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        EcommerceProductsService,
     
    ]
})
export class OperatorModule
{
}