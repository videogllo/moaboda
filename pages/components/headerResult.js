import Logo from "./logo";
import LogoSmall from "./logoSmall";
import UserForm from "./userForm";
import SearchForm from "./searchForm";

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
