import { withClassName } from '_utils/ui/tailwind';

import { flex, hStack, vStack } from './styles';

export const Flex = withClassName('Flex', 'div', flex);
export const HStack = withClassName('HStack', 'div', hStack);
export const VStack = withClassName('VStack', 'div', vStack);
