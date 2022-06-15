import React, { useRef } from 'react';
import { Input } from 'antd';
const { Search } = Input;

const Searchbar = () => {
  const searchValue = useRef();
  return (
    <Search
      placeholder='Search Cocktails'
      allowClear
      // onSearch={onSearch}
      style={{
        width: 250,
      }}
      ref={searchValue}
    />
  );
};

export default Searchbar;
