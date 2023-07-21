import { Billboard } from "@/types";
import Image from "next/image";

import { css } from "styled-system/css";
import { center } from "styled-system/patterns";

interface BillboardProps {
    billboard: Billboard;
};

const Billboard: React.FC<BillboardProps> = ({
    billboard
}) => {
    return (
        <div className={center({
            aspectRatio: {
                base: "1/1",
                md: "2.4/1"
            },
            pos: "relative"
        })}>
            <Image
                fill
                src={billboard.imageUrl}
                alt=""
                className={css({
                    objectFit: "cover",
                    rounded: "xl"
                })}
            />

                <h3 className={css({
                    fontSize: {
                        base: "3xl",
                        sm: "5xl",
                        lg: "6xl"
                    },
                    zIndex: 5,
                    fontWeight: "bold",
                    maxW: {
                      base: "xs",
                      sm: "xl"
                    },
                    lineHeight: 1,
                    textAlign: "center"
                })}>Explore The {billboard.label} Collection!</h3>
        </div>
    );
};

export default Billboard;
