import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSchool, faWallet, faUserGraduate, faUsers, faBullhorn, faChalkboardTeacher, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //Icons
  public appIcon: IconDefinition = faSchool;
  public feesIcon: IconDefinition = faWallet;
  public studentIcon: IconDefinition = faUserGraduate;
  public classesIcon: IconDefinition = faUsers;
  public attendanceIcon: IconDefinition = faBullhorn;
  public teacherIcon: IconDefinition = faChalkboardTeacher;
  public settingsIcon: IconDefinition = faCog;

  public sidenavBackgroundColor: String = "red";
  public isToggled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isToggled = !this.isToggled;
  }

}
