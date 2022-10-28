import StringUtility from './StringUtility';
import Util from './Util';

// NOTE: Code is lifted from this article here: https://medium.com/swlh/dont-let-api-data-structure-your-javascript-application-7fa7fd5a590f

export default class PropertyNormalizerUtility {
  static normalize(json) {
    const dataOrEmptyObject = json ? json : {};

    // Makes all property names camelCase so they are consistent in the application.
    // Also recursively goes through child objects.
    return Util.clone(dataOrEmptyObject, StringUtility.toCamelCase);
  }
}
