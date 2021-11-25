import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  const dispatch = useDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(actionCreators.SearchRepositories(term));
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
