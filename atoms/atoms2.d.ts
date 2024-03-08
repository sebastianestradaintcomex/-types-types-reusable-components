declare module "reusable_components/link-with-icon" {
    type PropsLinkWithIcon = {
        to?: string;
        label: string;
        icon?: string;
        typeicon?: "asset" | "primeicon";
        className?: string;
        disabled?: boolean;
        onClick?: () => void;
        /**
         * This prop is disabled in storybook avoiding errors
         */
        reactRouterLink?: boolean;
        linkComponent?: React.ForwardRefExoticComponent<
            LinkProps & React.RefAttributes<HTMLAnchorElement>
        >;
        iconPosition?: "left" | "right";
        size?: "large" | "medium" | "small";
        underlined?: boolean;
    };

    const Component: React.FC<PropsLinkWithIcon>;

    export default Component;
}
