export interface List {
  id: string;
  name: string;
}

export interface ListResponse {
  results: List[];
}

export default ListResponse;
