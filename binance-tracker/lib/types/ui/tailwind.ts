export interface TvFn {
  (...args: any): string;

  variantKeys: string[];
  variants: Record<string, Record<string, any>>;
}
