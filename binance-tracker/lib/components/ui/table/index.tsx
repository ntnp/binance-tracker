import { withClassName } from '_utils/ui/tailwind';

import { tableBody, tableData, tableHead, tableHeading, tableRoot, tableRow } from './styles';

export const Table = withClassName('Table', 'table', tableRoot);
export const Thead = withClassName('Thead', 'thead', tableHead);
export const Tbody = withClassName('Tbody', 'tbody', tableBody);
export const Tr = withClassName('Tr', 'tr', tableRow);
export const Th = withClassName('Th', 'th', tableHeading);
export const Td = withClassName('Td', 'td', tableData);
