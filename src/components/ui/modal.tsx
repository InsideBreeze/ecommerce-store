import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import IconButton from "./icon-button";

import { css } from "styled-system/css";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};


const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    const onOpenChange = () => {
        if (open) {
            onClose();
        }
    };
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal className={css({
            })}>
                <Dialog.Overlay className={css({
                    pos: "fixed",
                    inset: 0,
                    bg: "black",
                    opacity: "75%",
                })} />
                <div className={css({
                    pos: "relative"
                })}>
                    <Dialog.Content className={css({
                        pos: "fixed",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        shadow: "xl",
                        p: 6,
                        maxW: {
                            lg: "3xl",
                            md: "2xl",
                            sm: "xl",
                            base: "lg"
                        },
                        w: "full",
                        bg: "white",
                        rounded: "lg",
                        border: "1px solid token(colors.slate.100)",
                    })}>
                        <Dialog.Close asChild>
                            <IconButton onClick={onClose} className={css({
                                pos: "absolute",
                                top: 2,
                                right: 2
                            })}>
                                <X size={16} />
                            </IconButton>
                        </Dialog.Close>
                        {children}
                    </Dialog.Content>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Modal;
