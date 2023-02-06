import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { title } = await( await fetch(`/api/GetArticles`)).json();
      setData(title);
    })();
  });

  return <div>{data}</div>;
}

export default App;