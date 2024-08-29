import React, { createContext, useContext, useState } from 'react';

// Tạo Context API
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [apiEndpoint, setApiEndpoint] = useState(''); // Giá trị mặc định có thể để trống hoặc đặt một giá trị hợp lý

    return (
        <ApiContext.Provider value={{ apiEndpoint, setApiEndpoint }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);
