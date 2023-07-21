"use client";

import { MouseEventHandler } from "react";
import { css, cx } from "styled-system/css";

interface IconButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    children,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={cx(css({
                bg: "white",
                p: 2,
                rounded: "full",
                border: "1px solid token(colors.slate.200)",
                _hover: {
                    transform: "scale(1.08)",
                    cursor: "pointer"
                },
                transition: "transform",
                shadow: "md"
            }), className)}>
            {children}
        </button>
    );
};

export default IconButton;
