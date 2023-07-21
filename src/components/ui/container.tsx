import { css } from "styled-system/css";

interface ContainerProps {
    children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className={css({
            mx: "auto",
            maxW: "7xl",
            p: {
                base: 6,
                lg: 8
            }
        })}>
            {children}
        </div>
    );
};

export default Container;
