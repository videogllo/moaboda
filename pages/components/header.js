import Logo from "./logo";
import LogoSmall from "./logoSmall";
import UserForm from "./userForm";
import SearchForm from "./searchForm";
import Keyword from "./keyword";

const Header = () => {
    return (
        // <div className="flex px-2 w-full">
        //     {/* logo */}
        //     <div className="hidden md:block">
        //         <Logo></Logo>
        //     </div>
        //     <div className="block md:hidden">
        //         <LogoSmall></LogoSmall>
        //     </div>

        //     {/* search input */}
        //     <div className="w-full mx-6">
        //         <SearchForm></SearchForm>
        //         <Keyword></Keyword>
        //     </div>

        //     {/* user form */}
        //     <UserForm></UserForm>
        // </div>

        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <Logo></Logo>
                    {/* <div className="block md:hidden">
                        <LogoSmall></LogoSmall>
                    </div> */}
                </div>

                <div>
                    <UserForm></UserForm>
                </div>
            </div>

            <div className="w-full">
                <SearchForm></SearchForm>
                <Keyword></Keyword>
            </div>
        </div>
    );
};
export default Header;
