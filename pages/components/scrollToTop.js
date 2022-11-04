import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isButton, setIsButton] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const moveTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
        setScrollY(0);
        setIsButton(false);
    };

    // useEffect(() => {
    //     console.log(scrollY);
    // }, [scrollY]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
        };
    });

    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
        if (window.pageYOffset > 200) setIsButton(true);
        if (window.pageYOffset < 200) setIsButton(false);
    };

    return (
        <>
            {isButton && (
                <div
                    onClick={moveTop}
                    className="fixed bottom-6 right-4 lg:bottom-8 lg:right-6 z-30 bg-[#ff0558] hover:bg-[#ff0558]/60 rounded-lg flex items-center justify-center cursor-pointer"
                >
                    <div className="text-xl lg:text-2xl p-3 lg:p-4">👆🏼</div>
                </div>
            )}
        </>
    );
};
export default ScrollToTop;
