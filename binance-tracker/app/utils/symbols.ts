import type { SymbolTicker } from '_api/types/binance-ws/symbols';

export function isTicker(value: any): value is SymbolTicker {
  return Boolean(value)
    && typeof value === 'object'
    && 'e' in value
    && value.e === '24hrTicker';
}
