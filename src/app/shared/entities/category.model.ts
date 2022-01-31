export interface Links {
  self: string;
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  totalMediaCount: number;
  slug: string;
  nsfw: boolean;
  childCount: number;
}

export interface Links2 {
  self: string;
  related: string;
}

export interface Parent {
  links: Links2;
}

export interface Links3 {
  self: string;
  related: string;
}

export interface Anime {
  links: Links3;
}

export interface Links4 {
  self: string;
  related: string;
}

export interface Drama {
  links: Links4;
}

export interface Links5 {
  self: string;
  related: string;
}

export interface Manga {
  links: Links5;
}

export interface Relationships {
  parent: Parent;
  anime: Anime;
  drama: Drama;
  manga: Manga;
}

export interface CategoryProps {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Meta {
  count: number;
}

export interface Links6 {
  first: string;
  next: string;
  last: string;
}

export interface CategoryDataProps {
  data: CategoryProps[];
  meta: Meta;
  links: Links6;
}
