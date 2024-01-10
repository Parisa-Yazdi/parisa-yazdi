'use client';
import React, { useState } from 'react';

const Sort = () => {
  const [sortType, setSortType] = useState('');

  const handleSort = (type: string) => {
    setSortType(type);
    // Perform sorting logic here based on the selected type
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSort('ascending')}>Sort Ascending</button>
        <button onClick={() => handleSort('descending')}>Sort Descending</button>
      </div>
    </div>
  );
};

export default Sort;
