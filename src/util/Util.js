export default class Util {
  /**
   * Recursive function that makes a clone of an object.
   *
   * @param src {Object} The object you to clone.
   * @param renamePropertyNameFunction {(keyName: string) => string} Optional function to rename property names
   * @returns {any} Returns a clone object of the one passed in.
   * @example
   *      let cloneOfObject = Util.clone(obj);
   */
  static clone(src, renamePropertyNameFunction) {
    if (src == null || typeof src !== 'object') {
      return src;
    }

    if (src instanceof Date) {
      return new Date(src.getTime());
    }

    if (src instanceof RegExp) {
      return new RegExp(src);
    }

    if (src instanceof Array) {
      return src.map((item) => Util.clone(item, renamePropertyNameFunction));
    }

    if (src instanceof Object) {
      const hasRenameFunction = typeof renamePropertyNameFunction === 'function';

      return Object.keys(src).reduce((newObject, propertyName) => {
        const name = hasRenameFunction ? renamePropertyNameFunction(propertyName) : propertyName;

        newObject[name] = Util.clone(src[propertyName], renamePropertyNameFunction);

        return newObject;
      }, {});
    }

    throw new Error(`Unable to copy. ${src} isn't supported.`);
  }
}
