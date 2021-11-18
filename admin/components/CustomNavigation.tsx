import { NavigationContainer, NavItem, ListNavItems } from '@keystone-next/keystone/admin-ui/components';
import type { NavigationProps } from '@keystone-next/keystone/admin-ui/components';

export function CustomNavigation({ authenticatedItem, lists }: NavigationProps) {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <ListNavItems lists={lists}/>
      <NavItem href="/custom-page">Custom page</NavItem>
    </NavigationContainer>
  );
}