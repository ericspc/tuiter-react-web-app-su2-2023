import WhatsHappening from "./whats-happening";
// import TuitsList from "./tuits/tuitslist";
import TuitItem from "./tuits-list/tuit-item";

const HomeScreen = () =>{
    return(
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            {/*<TuitsList/>*/}
            <TuitItem/>
        </>
    );
}
export default HomeScreen;