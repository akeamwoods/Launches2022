/* eslint-disable prettier/prettier */
export default class StringUtility {
  /**
   * Converts a string to a camel case string.
   *
   * @example
   *      StringUtility.toCamelCase("liveDown_by-the.River");
   *      // 'liveDownByTheRiver'
   */
  static toCamelCase(str) {
    return (
      StringUtility.toSentence(str)
        // Replace spaces between words with a string upper cased character.
        .replace(/ (\w)/g, (searchValue, replacer) => {
          return replacer.toUpperCase();
        })
    );
  }

  /**
   * Converts a hyphen string to a pascal case string.
   *
   * @example
   *      StringUtility.toPascalCase("liveDown_by-the.River");
   *      // 'LiveDownByTheRiver'
   */
  static toPascalCase(str) {
    return (
      StringUtility.toCamelCase(str)
        // Make first character uppercase.
        .replace(/^[a-zA-Z]/, (a) => {
          return a.toUpperCase();
        })
    );
  }

  /**
   * Converts a string to a sentence case string.
   *
   * @example
   *      StringUtility.toSentence("liveDown_by-the.River");
   *      // 'live down by the river'
   *
   *      StringUtility.toSentence("liveDown_by-the.River", '-');
   *      // 'live-down-by-the-river'
   *
   *      StringUtility.toSentence("liveDown_by-the.River", '_');
   *      // 'live_down_by_the_river'
   *
   *      StringUtility.toSentence("liveDown_by-the.River", '/');
   *      // 'live/down/by/the/river'
   */
  static toSentence(str, separator = ' ') {
    return (
      String(str)
        // Add a space after any digits.
        .replace(/(\d+)/g, ' $1 ')
        // Add a space before any upper case characters.
        .replace(/([a-z](?=[A-Z]))/g, '$1 ')
        // Remove all non-word characters and replace with a single space.
        .replace(/[^a-zA-Z0-9 ]/g, ' ')
        // Replace multiple Spaces with a single space.
        .replace(/\s+/g, ' ')
        // Trim whitespace around the string.
        .replace(/^ | $/g, '')
        // Lower case the entire string.
        .toLowerCase()
        // If a separator is passed in then replace the space with it.
        .replace(/\s+/g, separator)
    );
  }
}
