interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
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
