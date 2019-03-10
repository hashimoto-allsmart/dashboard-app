import { AncorItem } from './anchor';

export interface SideBarItem extends AncorItem {
  items?: AncorItem[];
}