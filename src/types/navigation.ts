export interface DropdownItem {
  id: string;
  title: string;
  desc: string;
  iconType: string;
  badge?: string;
}

export interface NavMenuCategory {
  label: string;
  key: 'product' | 'features' | 'industries' | 'resources' | 'integrations' | 'language';
  hasDropdown: boolean;
  items?: DropdownItem[];
}
