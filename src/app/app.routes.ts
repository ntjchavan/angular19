import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './Components/Studies/parent/parent.component';
import { BindapidataComponent } from './Components/Studies/bindapidata/bindapidata.component';
import { NewtaskComponent } from './Components/Tasks/Newtask/newtask.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'parent', component: ParentComponent},
    { path: 'bindapi', component: BindapidataComponent },
    { path: 'tasks', component: NewtaskComponent },
    { path: '**', component: NotfoundComponent }
];
