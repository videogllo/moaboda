//components
import SearchForm from "./components/searchForm";
import UserForm from "./components/userForm";
import Logo from "./components/logo";
import LogoSmall from "./components/logoSmall";
import MainList from "./components/mainList";
import Keyword from "./components/keyword";
import BannerMain from "./components/bannerMain";
import IconFilter from "./components/iconFilter";
import Header from "./components/header";

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

                <Header></Header>
                <BannerMain></BannerMain>
                <IconFilter></IconFilter>
            
            <MainList></MainList>
        </>
    );
};
export default Main;
