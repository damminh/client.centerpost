/**
 * Created by BaoHoang on 1/3/2018.
 */
export class ReasonData {
  data: any;
  success: boolean;

  constructor(data?: any) {
    if (data) {
      this.success = true;
      this.data = data;
    } else {
      this.success = false;
    }
  }

}
