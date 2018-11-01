export const PRODUCT_MENU_OPEN = 'PRODUCT_MENU_OPEN';
export const PRODUCT_MENU_CLOSE = 'PRODUCT_MENU_CLOSE';

export function productMenuOpen() {
  return { type: PRODUCT_MENU_OPEN };
}

export function productMenuClose() {
  return { type: PRODUCT_MENU_CLOSE };
}
