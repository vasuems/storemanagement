export const PRODUCT_MENU_OPEN = 'PRODUCT_MENU_OPEN';
export const PRODUCT_MENU_CLOSE = 'PRODUCT_MENU_CLOSE';

export const REPORT_MENU_OPEN = 'REPORT_MENU_OPEN';
export const REPORT_MENU_CLOSE = 'REPORT_MENU_CLOSE';

export function productMenuOpen() {
  return { type: PRODUCT_MENU_OPEN };
}

export function productMenuClose() {
  return { type: PRODUCT_MENU_CLOSE };
}

export function reportMenuOpen() {
  return { type: REPORT_MENU_OPEN };
} 

export function reportMenuClose() {
  return { type: REPORT_MENU_CLOSE };
} 