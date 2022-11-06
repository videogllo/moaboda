import { useRef } from "react";

const UserPopup = ({setIsPopup}) => {
    const popupRef = useRef();

    const popupClose = () => {
        popupRef.current.classList.remove("animate__fadeIn");
        popupRef.current.classList.add("animate__fadeOut");
        setTimeout(() => {
            setIsPopup(false)
        },500)
    }

    return(
        <div className="absolute mt-2 w-52 z-30 right-0 bg-slate-700 shadow-xl flex flex-col rounded-lg py-2 cursor-default animate__animated animate__fadeIn" ref={popupRef}>
            <a href="#" className="hover:bg-slate-800 w-full text-left py-3 px-4 z-20">관리자 페이지</a>
            <a href="#" className="hover:bg-slate-800 w-full text-left py-3 px-4 z-20">로그아웃</a>
            <button className="bg-slate-600 py-1 mt-2 rounded-lg mx-2 flex justify-center items-center hover:bg-slate-800 text-xs" onClick={popupClose}>닫기</button>
        </div>
    )
}
export default UserPopup;