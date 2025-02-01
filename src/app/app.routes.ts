import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: AboutusComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
];
