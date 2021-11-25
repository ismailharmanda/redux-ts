interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
  switch (action.type) {
    case "serch_repositories":
      return { loading: true, error: null, data: [] };
    case "serch_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "serch_repositories_error":
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
