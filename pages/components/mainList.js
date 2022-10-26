//component
import MainListPopular from "./mainListPopular";
import MainListNews from "./mainListNews";
import IconFilter from "./iconFilter";

const MainList = () => {
    
        return (
            <div className="mt-12">
                <IconFilter></IconFilter>
                <MainListPopular></MainListPopular>
                <MainListNews></MainListNews>
            </div>
        );
};
export default MainList;
