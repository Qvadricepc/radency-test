// You can add needed fields from the response
export interface IItems {
  name: string;
  git_url: string;
  clone_url?: string;
  id: number;
}

export interface IFavoriteItem extends IItems {
  rating: number;
}

export interface IData {
  total_count: number;
  incomplete_results: boolean;
  items: IItems[];
}
