//components
import SearchForm from "./components/searchForm";
import UserForm from "./components/userForm";
import Logo from "./components/logo";
import LogoSmall from "./components/logoSmall";
import MainList from "./components/mainList";
import MainListCopy from "./components/mainList copy";
import Keyword from "./components/keyword";
import Category from "./components/category";

const Main = (props) => {
    return (
        <>
            <div className="flex flex-row items-center justify-center md:flex-col">
                {/* user */}
                <div className="ml-auto order-3 md:order-1">
                    <UserForm></UserForm>
                </div>

                {/* logo */}
                <div className="order-1 hidden md:order-2 md:block my-12">
                    <Logo></Logo>
                </div>
                <div className="block md:hidden">
                    <LogoSmall></LogoSmall>
                </div>

                {/* search input */}
                <div className="w-full md:w-5/6 lg:w-4/6 xl:w-3/6 order-2 md:order-3 mx-6">
                    <SearchForm></SearchForm>
                </div>
            </div>
            <div className="mx-auto w-full md:w-5/6 lg:w-4/6 xl:w-3/6 order-2 md:order-3">
                <Keyword></Keyword>
            </div>

            <Category></Category>
            <MainList result={props.result}></MainList>
            <MainListCopy result={props.result}></MainListCopy>
        </>
    );
};
export default Main;
