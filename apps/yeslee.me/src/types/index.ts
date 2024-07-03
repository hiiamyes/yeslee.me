// types.ts
export type Image = {
  url: string;
};

export type Item = {
  id?: number;
  name: string;
  nameZh?: string;
  isSelected?: boolean;
  brand?: string;
  product?: string;
  images?: Image[];
  checked?: boolean;
};

export type Items = Item[];

export type Pack = {
  id?: number;
  slug?: string;
  name: string;
  nameZh?: string;
  items?: Item[];
  started_at?: string;
  ended_at?: string;
  updated_at?: string;
};

export type Packs = Pack[];

export type User = {
  id: string;
  email: string;
  packs: [Pack];
};
