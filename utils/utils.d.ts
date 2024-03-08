type ElementsToScroll = "parent" | "parentPreviousSibling" | "element" | "none";

type HandleCollapse = <ElementContent>(
    show: boolean,
    elementContent: React.RefObject<ElementContent>,
    elementToScroll?: ElementsToScroll
) => void;

const useHandleCollapse = (() => {}) as HandleCollapse;

declare module "reusable_components/handle-collapse" {
    export { useHandleCollapse };
}
