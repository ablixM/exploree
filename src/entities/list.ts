export interface List {
  id: number;
  name: string;
}

export interface ListResponse {
  results: List[];
}

export default ListResponse;
