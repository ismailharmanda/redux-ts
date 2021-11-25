import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  const { SearchRepositories } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
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
    </div>
  );
};

export default RepositoriesList;
