import React from 'react';

const ListItem = ({need, onClick}) => (
    <li className="list-item" onClick={onClick}>
      <h1>
        {`${need.count} ${need.need} needed`}
      </h1>
      <p>
        {need.description}
      </p>
    </li>
);

export default ListItem;
