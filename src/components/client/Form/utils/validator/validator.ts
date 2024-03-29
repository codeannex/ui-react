import { Store } from "@utils/store/store";

export class Validator<Validators> extends Store<Validators> {
  constructor() {
    super();
  }

  public getValidators() {
    let validators = {};

    this.data.forEach((validator: any) => {
      validators = { ...validators, ...validator };
    });

    return validators;
  }
}
