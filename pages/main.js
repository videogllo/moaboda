//components
import Header from "./components/header";
import Footer from "./components/footer";
import SearchForm from "./components/searchForm";
// import Loading from "./components/loading";


const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className="bg-blue-200 min-h-[500px] flex items-center justify-center">
                <SearchForm></SearchForm>
            </div>

            <Footer></Footer>

            {/* <Loading></Loading> */}
        </div>
    );
};
export default Main;
