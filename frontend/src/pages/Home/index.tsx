import { Header } from "../../components/Header";
import { MainHome } from "../../components/MainHome";
import { ViewsGames } from "../../components/ViewsGames";


export function Home() {
    return (
        <>  
            <Header />
            <MainHome />
            <ViewsGames />
        </>
    )
}