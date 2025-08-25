import { withClassName } from '_utils/ui/tailwind';

import { inputField, inputRoot, inputSlot } from './styles';

export const Input = withClassName('Input', 'div', inputRoot);
export const InputSlot = withClassName('InputSlot', 'div', inputSlot);
export const InputField = withClassName('InputField', 'input', inputField);
