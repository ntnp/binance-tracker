import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { withClassName } from '_utils/ui/tailwind';

import * as Headless from '@radix-ui/react-select';
import { InputSlot } from '_ui/input';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';

import { selectContent, selectItem, selectItemIndicator, selectTrigger, selectValue, selectViewport } from './styles';

const StyledTrigger = withClassName('StyledTrigger', Headless.Trigger, selectTrigger);
const StyledValue = withClassName('StyledValue', 'span', selectValue);
const StyledContent = withClassName('StyledContent', Headless.Content, selectContent);
const StyledItem = withClassName('StyledItem', Headless.Item, selectItem);
const StyledItemIndicator = withClassName('StyledItemIndicator', Headless.ItemIndicator, selectItemIndicator);

export const Select = Headless.Root;
export const SelectViewport = withClassName('SelectViewport', Headless.Viewport, selectViewport);

interface SelectTriggerProps extends ComponentPropsWithRef<typeof StyledTrigger> {
}

export function SelectTrigger({ children, ...props }: SelectTriggerProps) {
  return (
    <StyledTrigger {...props}>
      {children}

      <Headless.Icon asChild>
        <InputSlot through>
          <ChevronDownIcon />
        </InputSlot>
      </Headless.Icon>
    </StyledTrigger>
  );
}

interface SelectValueProps extends ComponentPropsWithRef<typeof StyledValue> {
  placeholder?: ReactNode;
}

export function SelectValue({ placeholder, ...props }: SelectValueProps) {
  return (
    <StyledValue {...props}>
      <Headless.Value placeholder={placeholder} />
    </StyledValue>
  );
}

interface SelectContentProps extends ComponentPropsWithRef<typeof StyledContent> {
}

export function SelectContent({ children, ...props }: SelectContentProps) {
  return (
    <Headless.Portal>
      <StyledContent position="popper" {...props}>
        <SelectViewport>
          {children}
        </SelectViewport>
      </StyledContent>
    </Headless.Portal>
  );
}

interface SelectItemProps extends ComponentPropsWithRef<typeof StyledItem> {
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <StyledItem {...props}>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>

      <Headless.ItemText>{children}</Headless.ItemText>
    </StyledItem>
  );
}
