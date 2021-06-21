import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { StudentEditComponent } from 'src/app/edit/student-edit/student-edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('definedColumns') public cols: any[] = [];
  @Input('enableStatusColumns') public enableStatus: boolean = false;
  @Input('enableReporting') public enableReporting: boolean = false;
  @Input('datatype') public datatype: string = "";
  @Input('sortByDefault') public sortByDefault: any[] = [];
  @Input('route') public route: string = '';

  public _data: any[];
  public status: boolean[] = [];
  public multiSortMeta: any[] = [];

  public displayDialog: boolean = false;

  get data(): any[] {
    return this._data;
  }

  @Input()
  set data(value: any[]) {
    this._data = value;
    for (let i = 0; i < this._data.length && this.enableStatus; i++) {
      this.status[i] = true;
    }
  }

  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    if (this.sortByDefault.length) {
      for (let i = 0; i < this.sortByDefault.length; i++) {
        this.multiSortMeta.push(this.sortByDefault[i]);
      }
    }
  }

  deleteItem(item: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to remove ' + item.firstname + ' ' + item.lastname + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: item.firstname + ' ' + item.lastname + ' deleted', life: 3000 });
      }
    });
  }

  editItem(item: any): void {
    const ref = this.dialogService.open(StudentEditComponent, {
      header: this.datatype + ' details',
      data: item,
      width: '70%'
    });
  }

  viewItem(item: any) {
    this.router.navigate([this.route, item.id]);
  }
}
