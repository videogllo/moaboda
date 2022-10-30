import Logo from "./logo";
import LogoSmall from "./logoSmall";
import UserForm from "./userForm";
import SearchForm from "./searchForm";

/**
 * 결과 페이지에서는 헤더의 구조가 다르므로 따로 분리
 * @returns 
 */
const Header = () => {
    return (
        <div className="flex flex-col mx-2">
            <div className="flex justify-between items-center gap-6">
                <div className="hidden lg:block"><Logo></Logo></div>
                <div className="block lg:hidden"><LogoSmall></LogoSmall></div>
                <div className="ml-auto min-w-[50%]"><SearchForm></SearchForm></div>
                <UserForm></UserForm>
            </div>
        </div>
    );
};
export default Header;
