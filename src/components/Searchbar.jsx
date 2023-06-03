import { useRef, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';

function Searchbar({ onSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }

    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <DebounceInput
        inputRef={inputRef}
        type="search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        debounceTimeout={350}
      />
    </div>
  );
}

export default Searchbar;
