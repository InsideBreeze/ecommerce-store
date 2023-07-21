"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

import { Category } from "@/types";

import { hstack } from "styled-system/patterns";
import { css } from "styled-system/css";

interface MainNavProps {
    data: Category[]
};

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathanme =usePathname();

    const routes = data.map((category) => ({
        id: category.id,
        name: category.name,
        href: `/categories/${category.id}`,
        isActive: pathanme === `/categories/${category.id}`
    }))
    return (
        <nav className={hstack({
            gap: 4,
            mx: 4
        })}>
            {
                routes.map((route) => (
                    <Link href={route.href}
                          key={route.id}
                          className={css({
                              color: {
                                  base: route.isActive ? "black" : "slate.600",
                                  _hover: "black"
                              },
                              transition: "color"
                          })}
                    >
                        {route.name}
                    </Link>
                ))
            }

        </nav>
    );
};

export default MainNav;
