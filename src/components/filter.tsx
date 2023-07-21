"use client";

import qs from "query-string";

import { Color, Size } from "@/types";
import { css } from "styled-system/css";
import { center, divider, hstack, vstack } from "styled-system/patterns";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
    name: string;
    data: (Color | Size)[],
    selectedKey: "sizeId" | "colorId"
};

const Filter: React.FC<FilterProps> = ({
    name,
    data,
    selectedKey
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(selectedKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [selectedKey]: id
        }

        if (current[selectedKey] === id) {
            query[selectedKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });


        router.push(url);

    }


    return (
        <div className={vstack({
            alignItems: "flex-start",
            my: 4,
            gap: 3
        })}>
            <div className={css({
                fontSize: "xl",
                fontWeight: "semibold"
            })}>{name}</div>
            <div className={divider({
                color: "slate.200"
            })} />
            <div className={hstack({
                flexWrap: "wrap"
            })}>
                {
                    data.map((item) => (
                        <button
                            onClick={() => onClick(item.id)}
                            key={item.id}
                            className={center({
                                border: "1px solid token(colors.slate.200)",
                                px: 3,
                                py: 1,
                                rounded: "md",
                                _hover: {
                                    cursor: "pointer",
                                    opacity: "80%"
                                },
                                bg: selectedValue === item.id ? "black" : "white",
                                color: selectedValue === item.id ? "white" : "black",
                            })}>
                            {item.name}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Filter;
