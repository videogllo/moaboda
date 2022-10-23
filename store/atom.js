import { atom } from "recoil";
//atom의 모든 변수명은 대문자로 구분

/**
 * 선택된 필터를 배열에 문자열로 담는다.
 */
export const SELECT_FILTER = atom({
    key: "SELECT_FILTER",
    default: [],
});