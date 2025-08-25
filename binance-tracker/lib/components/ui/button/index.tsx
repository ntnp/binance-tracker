import { withClassName } from '_utils/ui/tailwind';

import { buttonRoot } from './styles';

export const Button = withClassName('Button', 'button', buttonRoot, { type: 'button' });
