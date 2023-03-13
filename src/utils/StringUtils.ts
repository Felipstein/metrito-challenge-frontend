export class StringUtils {

  static removeAllNoDigitChar(value: string): number {
    const onlyDigits = value.replace(/[^\d]+/g, '');

    return onlyDigits as unknown as number;
  }

}
