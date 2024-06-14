import React from 'react';
import { useState } from 'react';
import explorerFolder from './data/data';
import Folder from './components/Folder';

const App = () => {
  const [explorer, setExplorer] = useState(explorerFolder);

  return <Folder explorer={explorer} />;
};

export default App;
