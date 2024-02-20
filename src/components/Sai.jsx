import Repositorios from "./Repositorios";
import Perfil from "./Perfil";
import Overview from "./OverView";
export default function Sai(){
    return (
        <>
        <div className="bg-[#161B22] h-screen flex w-[100%]">
            <Perfil/>
            <Overview/>
            <Repositorios/>
        </div>
        </>
    )
}