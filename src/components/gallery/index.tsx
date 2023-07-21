"use client";

import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";

import { Image as ImageType } from "@/types";
import { css } from "styled-system/css";
import { Fragment } from "react";

interface GalleryProps {
    images: ImageType[]
};

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    return (
        <Tabs.Root defaultValue={images[0].id} orientation="horizontal" asChild>
            <div className={css({
                mt: {
                    base: 20,
                    sm: 0
                },
                display: "flex",
                flexDir: "column",
            })}>
                <div className={css({
                })}>
                    {
                        images.map((image) => (
                            <Fragment key={image.id}>
                                <Tabs.Content value={image.id}>
                                    <div className={css({
                                        aspectRatio: "square",
                                        pos: "relative",
                                        shadow: "lg",
                                        _focusVisible: {
                                            outline: 0,
                                        },
                                        h: "full",
                                        w: "full"
                                    })}>
                                        <Image
                                            src={image.url}
                                            alt=""
                                            fill
                                            className={css({
                                                rounded: "base",
                                            })}
                                        />
                                    </div>
                                </Tabs.Content>
                            </Fragment>
                        ))
                    }
                </div>
                <Tabs.List aria-label="images tabs" asChild>
                    <div className={css({
                        display: {
                            base: "none",
                            sm: "grid"
                        },
                        gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                        gap: 4,
                        w: "full",
                        h: "full",
                        mt: 5,
                        _hover: {
                            cursor: "pointer"
                        },
                        rounded: "xl",
                    })}>
                        {
                            images.map((image) => (
                                <Tabs.Trigger value={image.id} asChild key={image.id}>
                                    <div
                                        className={css({
                                            aspectRatio: "square",
                                            h: "full",
                                            w: "full",
                                            pos: "relative",
                                            shadow: "lg",
                                            _focusVisible: {
                                                ring: 0
                                            },

                                        })}>
                                        <Image
                                            src={image.url}
                                            alt=""
                                            className={css({
                                                rounded: "md",
                                            })}
                                            fill
                                        />

                                        <div
                                            className={css({
                                                pos: "absolute",
                                                inset: 0,
                                                rounded: "lg",
                                                "[aria-selected=true] &": {
                                                    ring: "1px solid black",
                                                    ringOffset: "2px"
                                                }
                                            })}
                                        />
                                    </div>

                                </Tabs.Trigger>
                            ))
                        }
                    </div>

                </Tabs.List>
            </div>
        </Tabs.Root>

    );
};

export default Gallery;
