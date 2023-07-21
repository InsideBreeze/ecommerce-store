"use client";

import { useEffect, useState } from "react";
import { css } from "styled-system/css";

interface CurrencyProps {
    value: string | number
};

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <div className={css({
            fontWeight: "semibold"
        })}>
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;
