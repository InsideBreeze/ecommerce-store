import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal"
import Gallery from "./gallery";
import Info from "./info";
import { grid, gridItem } from "styled-system/patterns";

interface PreviewModalProps {

};

const PreviewModal: React.FC<PreviewModalProps> = () => {

    const previewModal = usePreviewModal();

    const product = usePreviewModal((state) => state.data);

    if (!product) {
        return null;
    }

    return (
        <Modal
            open={previewModal.open}
            onClose={previewModal.onClose}
        >
            <div className={grid({
                columns: {
                    base: 1,
                    sm: 12
                },
                gap: "20px"
            })}>
                <div className={gridItem({
                    colSpan: {
                        base: 1,
                        sm: 4,
                        lg: 5
                    }
                })}>
                    <Gallery images={product.images} />
                </div>
                <div className={gridItem({
                    colSpan: {
                        base: 1,
                        sm: 8,
                        lg: 7
                    }
                })}>
                    <Info product={product} />
                </div>
            </div>
        </Modal>
    );
};

export default PreviewModal;
