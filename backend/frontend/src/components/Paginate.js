import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
  console.log(page);
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0];
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item 
            key={x + 1} 
            active={x + 1 === page} 
            style={{ backgroundColor: x + 1 === page ? '#000' : '', color: x + 1 === page ? '#fff' : '' }}
          >
            <Link
              to={
                !isAdmin
                  ? `/?keyword=${keyword}&page=${x + 1}`
                  : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
              }
              style={{ textDecoration: 'none', color: x + 1 === page ? '#fff' : '#000' }} 
            >
              {x + 1}
            </Link>
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
