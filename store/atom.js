import { atom } from "recoil";
//atom의 모든 변수명은 대문자로 구분

export const MAIN_LIST = atom({
    key: "MAIN_LIST",
    default: [],
});