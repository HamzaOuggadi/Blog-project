export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  userId?: any;
  categories: any[];
  comments: any[];
}
