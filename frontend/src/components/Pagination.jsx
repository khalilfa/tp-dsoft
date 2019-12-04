import React from 'react';

const Pagination = ({ totalPages, page, getMenus }) => {
  const indexes = [];

  for (let i = 0; i < totalPages; i += 1) {
    indexes.push(i);
  }

  const changePage = (ev, element) => {
    ev.preventDefault();
    getMenus(element);
  };

  return (
    <div className="pages-number">
      <button type="button" disabled={page === 0} onClick={(e) => changePage(e, 0)}>{'<<'}</button>
      <button type="button" disabled={page === 0} onClick={(e) => changePage(e, (page - 1))}>{'<'}</button>
      <button type="button">{page + 1}</button>
      <button type="button" disabled={(totalPages - 1) === page} onClick={(e) => changePage(e, (page + 1))}>{'>'}</button>
      <button type="button" disabled={(totalPages - 1) === page} onClick={(e) => changePage(e, (totalPages - 1))}>{'>>'}</button>
    </div>
  );
};

export default Pagination;
