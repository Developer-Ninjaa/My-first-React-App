import React, { createContext, useState } from 'react';

const MyContext = createContext();

const [state, setState] = useState();

return (
<MyContext.Provider value={{state, setState}}>
{children}
</MyContext.Provider>
);
};
