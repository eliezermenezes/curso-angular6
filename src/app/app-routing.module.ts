import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComicsComponent } from './comics/comics.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TesteGuard } from 'src/app/teste.guard';

const routes: Routes = [
  { path: '#', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [TesteGuard] },
  { path: 'comics', component: ComicsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },  
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
