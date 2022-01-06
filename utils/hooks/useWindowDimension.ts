import {useState, useEffect} from "react";

type WindowDimensions = {
    windowWidth: number | undefined;
    windowHeight: number | undefined;
};

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        windowWidth: undefined,
        windowHeight: undefined,
    });

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return (): void => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
}
