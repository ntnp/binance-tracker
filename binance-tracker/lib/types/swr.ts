export type SwrKey = readonly (string | number)[]

export type UrlLiteral<A> = A extends [infer First, ...infer Rest]
  ? (Rest extends [] ? `${First & string | number}` : `${First & string | number}/${UrlLiteral<Rest>}`)
  : '';
