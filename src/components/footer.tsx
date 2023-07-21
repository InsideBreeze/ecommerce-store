import { center } from "styled-system/patterns";

const Footer = () => {
    return (
        <div className={center({
            py: 3,
            borderTop: "1px solid token(colors.slate.200)"
        })}>
            <p>&copy; 2023 Lemon Store Inc. All rights reserved </p>
        </div>
    );
};

export default Footer;
