export interface Repository {
  id: number;
  name: string;
  url: string;
}

export interface FavRepository extends Repository {
  rating: number;
}

export interface UserData {
  search: {
    nodes: Repository[];
  };
}
