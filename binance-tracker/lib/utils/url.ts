import urlJoin from 'url-join';
import queryString from 'query-string';

import type { UrlLiteral } from '_types/swr';

export function _<
  P extends (string | number)[],
>(
  ...args: P
) {
  return urlJoin(...args as any) as UrlLiteral<P>;
}

export function query(object: object | undefined, prefix: string | boolean = true) {
  if (!object) {
    return '';
  }

  const str = queryString.stringify(object);
  const prefixStr = prefix ? (prefix === true ? '?' : prefix) : '';

  return `${prefixStr}${str}`;
}
