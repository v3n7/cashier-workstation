import React from "react";
import { useLocation } from "react-router-dom";

export default function Search(props) {
  const [searchValue, setSearchValue] = React.useState(props.searchValue);

  return (
    <form>
      <label>
        <div>Поиск</div>
        <input type="text" value={searchValue} />
        <button type="submit">Обновить (F5)</button>
      </label>
    </form>
  );
}
