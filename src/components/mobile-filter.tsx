"use client";

import { Plus, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog"

import { css } from "styled-system/css";
import { useEffect, useState } from "react";
import { Color, Size } from "@/types";
import Filter from "./filter";


interface MobileFilterProps {
    colors: Color[],
    sizes: Size[]
};

const MobileFilter: React.FC<MobileFilterProps> = ({
    colors,
    sizes
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button
                    onClick={onOpen}
                    className={css({
                        alignItems: "center",
                        gap: 2,
                        display: {
                            base: "flex",
                            lg: "none"
                        },
                        px: 5,
                        py: 2,
                        bg: "black",
                        color: "white",
                        rounded: "full"
                    })}>
                    Filters
                    <Plus className={css({
                        w: 4,
                        h: 4
                    })} />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className={css({
                    pos: "fixed",
                    inset: 0,
                    bg: "black",
                    opacity: "40%"
                })} />
                <Dialog.Content className={css({
                    bg: "white",
                    pos: "fixed",
                    right: "0",
                    top: "0",
                    w: "45%",
                    h: "full",
                    zIndex: 50
                })}>
                    <Dialog.Close asChild>
                        <button
                            onClick={onClose}
                            className={css({
                            pos: "absolute",
                            top: 3,
                            right: 3,
                            p: 2,
                            rounded: "full",
                            border: "1px solid token(colors.slate.200)",
                            _hover: {
                                transform: "scale(1.08)",
                                cursor: "pointer"
                            },
                            transition: "transform",
                            shadow: "md"
                        })}>
                            <X size={16} />
                        </button>
                    </Dialog.Close>

                    <div className={css({
                        mt: "50px",
                        p: 4
                    })}>
                        <Filter
                            selectedKey="colorId"
                            name="colors"
                            data={colors}
                        />

                        <Filter
                            selectedKey="sizeId"
                            name="sizes"
                            data={sizes}
                        />

                    </div>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default MobileFilter;
