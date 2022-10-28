import Logo from "./logo";
import UserForm from "./userForm";
import SearchForm from "./searchForm";
import Keyword from "./keyword";

const Header = () => {
    return (
        <div className="flex flex-col gap-4 mx-2">
            <div className="flex justify-between items-center">
                <Logo></Logo>
                <UserForm></UserForm>
            </div>

            <div className="w-full">
                <SearchForm></SearchForm>
                <Keyword></Keyword>
            </div>
        </div>
    );
};
export default Header;
