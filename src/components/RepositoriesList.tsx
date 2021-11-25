import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  const { SearchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    SearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={term} onChange={onInputChange} type="text" />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
