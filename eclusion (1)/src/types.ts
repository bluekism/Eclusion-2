export type Category = 'Tote Bag' | 'Key Chain' | 'Hat' | 'Socks' | 'Others';

export interface Artist {
  id: string;
  name: string;
  age: number;
  specialNeeds: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  artistId: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}
