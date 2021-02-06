import { helper } from '@ember/component/helper';

export function getType(params:any/*, hash*/):string {
  let ret = typeof(params[0]);
  return ret;
}

export default helper(getType);
