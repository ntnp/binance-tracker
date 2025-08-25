import { type ComponentPropsWithoutRef, type ComponentPropsWithRef, type ComponentType, createElement, type FunctionComponent, type JSX } from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type VariantProps } from 'tailwind-variants';

import type { TvFn } from '_types/ui/tailwind';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const variantPropsToForward = '[variantPropsToForward]';

export function splitStyleProps<
  V extends TvFn,
  P extends object,
>(
  style: V,
  props: P,
): {
  commonProps: Omit<P, 'className' | keyof VariantProps<V>>,
  styleProps: VariantProps<V> & { className?: string },
  variantProps: VariantProps<V>,
} {
  return Object.entries(props).reduce((acc, [propKey, propValue]) => {
    const isClassName = propKey === 'className';
    const isVariant = style.variantKeys.includes(propKey);

    if (isVariant) {
      acc.styleProps[propKey] = propValue;
      acc.variantProps[propKey] = propValue;

      if (style.variants[variantPropsToForward]?.[propKey]) {
        acc.commonProps[propKey] = propValue;
      }
    }
    else if (isClassName) {
      acc.styleProps[propKey] = propValue;
    }
    else {
      acc.commonProps[propKey] = propValue;
    }

    return acc;
  }, { commonProps: {}, variantProps: {}, styleProps: {} } as any);
}

export function withClassName<
  Component extends keyof JSX.IntrinsicElements,
  Tv extends TvFn,
>(
  name: string,
  Component: Component,
  styles: Tv,
  defaultProps?: Partial<JSX.IntrinsicElements[Component] & VariantProps<Tv>>,
): FunctionComponent<JSX.IntrinsicElements[Component] & VariantProps<Tv>>;

export function withClassName<
  Component extends ComponentType<any>,
  Tv extends TvFn,
>(
  name: string,
  Component: Component,
  styles: Tv,
  defaultProps?: Partial<ComponentPropsWithoutRef<Component> & VariantProps<Tv>>,
): FunctionComponent<ComponentPropsWithRef<Component> & VariantProps<Tv>>;

export function withClassName<
  Component extends keyof JSX.IntrinsicElements | ComponentType<any>,
  Tv extends TvFn,
>(
  name: string,
  Component: Component,
  styles: Tv,
  defaultProps?: Partial<ComponentPropsWithoutRef<Component> & VariantProps<Tv>>,
) {
  type ForwardedProps = ComponentPropsWithRef<Component> & VariantProps<Tv>

  const ForwardedComponent = (userProps: ForwardedProps) => {
    const { commonProps, styleProps } = splitStyleProps(styles, { ...defaultProps, ...userProps } as ForwardedProps);
    const className = styles(styleProps);

    return createElement(Component, { ...commonProps, className });
  };
  ForwardedComponent.displayName = name;

  return ForwardedComponent as FunctionComponent<ForwardedProps>;
}
