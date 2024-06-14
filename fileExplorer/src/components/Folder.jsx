import React from 'react';
import { useState } from 'react';

const Folder = ({ explorer }) => {
  const [toggle, setToggle] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <div key={explorer.div} onClick={() => setToggle(!toggle)}>
          <span> 📁 {explorer.name}</span>
        </div>
        <div
          style={{
            display: toggle ? 'inline-block' : 'none',
            marginLeft: '1rem',
          }}
        >
          {explorer.items.map((item) => {
            return <Folder explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'grid' }}>
        <span> 📄 {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
