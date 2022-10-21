//component
import MainListPopular from "./mainListPopular";
import MainListNews from "./mainListNews";
import MainIconFilter from "./mainIconFilter";

const MainList = () => {
    
        return (
            <div className="mt-12" id="mainList">
                <MainIconFilter></MainIconFilter>
                <MainListPopular></MainListPopular>
                <MainListNews></MainListNews>
            </div>
        );
};
export default MainList;
