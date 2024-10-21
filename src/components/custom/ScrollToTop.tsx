import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

type TScrollToTop = {
    targetID?: string;
    visibilityHeight?: number;
    scrollBehavior?: 'smooth' | 'auto' | 'instant';
    onAfterScroll?: () => void;
};

export const ScrollToTop = ({
    targetID,
    visibilityHeight = 0,
    scrollBehavior = 'smooth',
    onAfterScroll,
}: TScrollToTop) => {
    const [element, setElement] = useState<Window | HTMLElement>(window);
    const [showBtn, setShowBtn] = useState<boolean>(false);

    const handleScrollClick = () => {
        element.scrollTo({ top: 0, behavior: scrollBehavior });
        onAfterScroll?.();
    };

    useEffect(() => {
        if (targetID) {
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                setElement(targetElement);
            } else {
                console.error(`Element with ID '${targetID}' not found`);
            }
        }

        const handleScroll = () => {
            const elementHeight =
                element instanceof HTMLElement
                    ? element.getBoundingClientRect().height
                    : window.innerHeight;
            const elementScrollTop =
                element instanceof HTMLElement ? element.scrollTop : window.scrollY;

            if (
                elementScrollTop >
                (visibilityHeight > 0 ? visibilityHeight : elementHeight * 0.5)
            ) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        element.addEventListener('scroll', handleScroll);

        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [targetID, element]);

    return (
        showBtn && (
            <ArrowUp onClick={handleScrollClick} className='bg-logo w-14 h-14 p-2 rounded-full shadow-lg cursor-pointer z-1 text-white fixed right-5 bottom-5' />
        )
    );
};
