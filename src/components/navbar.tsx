import Link from "next/link";

import getCategories from "@/actions/get-categories";
import MainNav from "./main-nav";

import { hstack } from "styled-system/patterns";
import { css } from "styled-system/css";
import NavbarActions from "./navbar-actions";

interface NavbarProps {

};

const Navbar: React.FC<NavbarProps> = async () => {
    const categories = await getCategories();

    return (
        <div className={hstack({
            h: "64px",
            borderBottom: "1px solid token(colors.slate.200)",
            px: 8,
        })}>
            <Link
                href="/"
                className={css({
                    fontWeight: "bold",
                    fontSize: "xl"
                })}>
                STORE
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
        </div>
    );
};

export default Navbar;
