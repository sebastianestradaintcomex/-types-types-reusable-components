declare type ListItem = {
    label: string;
    value?: string;
    onClick?: (value?: string | number | object | undefined) => void;
};

declare module "reusable_components/items-list" {
    type ItemsListType = Array<{
        id: string;
        label: string;
        url?: string;
        icon?: string;
        //For custom icons like svg or images
        iconActive?: string;
        typeicon?: "asset" | "primeicon";
    }>;

    type PropsItemsListType = {
        selectedId?: string;
        borderHighlightPosition?: "left" | "right";
        selectedUrl?: string;
        items: ItemsListType;
        onclickitem?: (
            e: React.MouseEvent<HTMLElement>,
            item: ItemsListType[number]
        ) => void;
        reactRouterLink?: boolean;
        parentStyles?: CSSProperties;
        bottomBorder?: boolean;
    };

    const Component: React.FC<PropsItemsListType>;

    export default Component;
}

declare module "reusable_components/card" {
    type PropsCard = React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > & {
        bgcolor?: string;
        titleCard?: JSX.Element;
        body: JSX.Element;
    };

    const Component: React.FC<PropsCard>;

    export default Component;
}
