export interface TLink {
    name: string;
    href: string;
}

export interface SocialLink extends TLink {
    icon: JSX.Element;
}