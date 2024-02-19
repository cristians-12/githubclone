import Repositorios from "./Repositorios";
import Perfil from "./Perfil";
import Overview from "./OverView";
export default function Sai(){
    return (
        <>
        <div className="bg-[#161B22] h-screen flex px-[10%]">
            <Perfil/>
            <Overview/>
            <Repositorios/>
        </div>
        </>
    )
}