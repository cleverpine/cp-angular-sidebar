
import { ROUTES } from '../constants/ROUTES';
import { FieldConfig } from './field-config';

export const navItems: FieldConfig[] = [
  {
    title: 'materials',
    cssClass: 'icon-materials icon',
    route: ROUTES.materials,
  },
  {
    title: 'reports',
    cssClass: 'icon-reports icon',
    route: ROUTES.reports,
  },
];
