import React, {FC} from "react";
import css from './StorybookGrid.module.scss';
type TProps = {
    children: React.ReactNode
} & React.HTMLProps<HTMLDivElement>

const StorybookGrid:FC<TProps> = ({children, ...props}) => {
    return (
        <div className={css.storybookGrid} {...props}>
            {React.Children.map(children, (child, index)=>{
                return (
                    <div key={index}>{child}</div>
                )
            })}
        </div>
    );
};

export default StorybookGrid;