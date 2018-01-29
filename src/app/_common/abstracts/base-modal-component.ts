import {BsModalRef} from "ngx-bootstrap";
import {EventEmitter} from '@angular/core';
import {ReasonData} from "./reason-data";
/**
 * Created by BaoHoang on 9/27/2017.
 *
 *
 */

export abstract class BaseModalComponent {

  public model: any;
  public isLoading: boolean;
  public onHidden: EventEmitter<ReasonData> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {
    this.isLoading = true;
  }

  public setModel(model: any) {
    this.model = model;
    this.loaded();
  }

  public abstract loaded(): void;

  public dismiss() {
    this.bsModalRef.hide();
    this.onHidden.emit(new ReasonData());
  }

  public close(model: any) {
    this.bsModalRef.hide();
    this.onHidden.emit(new ReasonData(model));
  }
}
