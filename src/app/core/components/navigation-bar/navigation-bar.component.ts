import { Component, OnInit } from '@angular/core';
import { faWallet, faUserGraduate, IconDefinition, faBullhorn, faUsers, faChalkboardTeacher, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public feesIcon: IconDefinition = faWallet;
  public studentIcon: IconDefinition = faUserGraduate;
  public classesIcon: IconDefinition = faUsers;
  public attendanceIcon: IconDefinition = faBullhorn;
  public teacherIcon: IconDefinition = faChalkboardTeacher;
  public settingsIcon: IconDefinition = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
