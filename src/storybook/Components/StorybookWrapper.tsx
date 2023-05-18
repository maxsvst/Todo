import React, {FC} from 'react';

type TProps ={
    children: React.ReactNode
}

const StorybookWrapper:FC<TProps> = ({children}) => {
    return (
        <div style={{background: '#0F0D0D'}}>
            {children}
        </div>
    );
};

export default StorybookWrapper;