import { withClassName } from '_utils/ui/tailwind';

import { heading, text } from './styles';

export const Span = withClassName('Span', 'span', text);

export const H1 = withClassName('H1', 'h1', heading, { as: 'h1' });
export const H2 = withClassName('H2', 'h2', heading, { as: 'h2' });
