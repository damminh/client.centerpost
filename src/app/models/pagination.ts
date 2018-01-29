import {PaginationOutput} from "./pagination-output";
/**
 * Created by BaoHoang on 8/22/2017.
 */
export interface IPagination {
  totalItems: number;
  currentPage: number;
  numPages: number;
  maxSize: number;
  itemsPerPage: number;
}

export class AppPagination implements IPagination {
  totalItems: number;
  currentPage: number;
  numPages: number;
  maxSize: number;
  itemsPerPage: number;

  constructor() {
    this.totalItems = 0;
    this.currentPage = 1;
    this.numPages = 0;
    this.maxSize = 5;
    this.itemsPerPage = 20;
  }

  set(output: PaginationOutput) {
    this.totalItems = output.total;
    this.currentPage = output.current_page;
    this.numPages = output.last_page;
  }

}
