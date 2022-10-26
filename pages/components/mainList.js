//component
import MainListPopular from "./mainListPopular";
import MainListNews from "./mainListNews";
import IconFilter from "./iconFilter";

const MainList = () => {
    
        return (
            <div>
                <IconFilter></IconFilter>
                <MainListPopular></MainListPopular>
                <MainListNews></MainListNews>
            </div>
        );
};
export default MainList;
