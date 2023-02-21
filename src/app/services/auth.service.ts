import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }
  currentUser!: User | null; 
  userName! : string | null;
  photoUrl!: string| null;

  loginWithGG(){
    let google = new GoogleAuthProvider();
    return signInWithPopup(this.auth, google);
  }

  logOut(){
    this.router.navigate([`/login`])
    this.auth.signOut();
  }

  checkUser(){
    if( this.currentUser){
      return true;
    }
    return false;
  }

}
