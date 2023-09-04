import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidenav: MatDrawer;
  private _sidenavSubject = new BehaviorSubject<MatDrawer>(null);

  setSidenav(sidenav: MatDrawer) {
    this._sidenav = sidenav;
    this._sidenavSubject.next(sidenav);
  }

  getSidenav() {
    return this._sidenav;
  }

  getSidenavSubject() {
    return this._sidenavSubject.asObservable();
  }
}
