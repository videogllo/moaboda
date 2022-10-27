//components
import SearchForm from "./components/searchForm";
import UserForm from "./components/userForm";
import Logo from "./components/logo";
import LogoSmall from "./components/logoSmall";
import MainList from "./components/mainList";
import Keyword from "./components/keyword";
import BannerMain from "./components/bannerMain";
import IconFilter from "./components/iconFilter";

//firestore test
import { db } from "../firebase";
import {
    collection,
    doc,
    addDoc,
    setDoc,
    deleteDoc,
    deleteField,
    updateDoc,
    deleteData,
} from "firebase/firestore";

const Main = () => {
    const addData = async () => {
        try {
            const res = await setDoc(doc(db, "users2", "1243"), {
                title: "title name",
                imgUrl: "https://naver.com",
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteData = async () => {
        await deleteDoc(doc(db, "users2", "1243"));
    };

    return (
        <>
            {/* <div className="text-3xl" onClick={deleteData}>button</div> */}

            <div className="flex flex-row items-center justify-center md:flex-col">
                {/* user */}
                <div className="ml-auto order-3 md:order-1 md:absolute md:right-3 md:top-3">
                    <UserForm></UserForm>
                </div>

                {/* logo */}
                <div className="order-1 hidden md:order-2 md:block mb-4">
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
            <div className="mx-auto w-full md:w-5/6 lg:w-4/6 xl:w-3/6">
                <Keyword></Keyword>
            </div>

            <div className="w-full mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                <BannerMain></BannerMain>
                <IconFilter></IconFilter>
            </div>

            <MainList></MainList>
        </>
    );
};
export default Main;
