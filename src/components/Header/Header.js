import React from 'react';

const Header = ({ doneCount, todoCount }) => (
  <div className="col-sm">
    {todoCount} more todo {doneCount} done
  </div>
);

export default Header;
