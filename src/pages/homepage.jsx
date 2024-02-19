import NavBar from "../components/NavBar";
import Sai from '../components/Sai'
import Repositorios from '../components/Repositorios'
import { useAuth } from "../context/AuthContext";


export const Home = () => {

  const {user} = useAuth();

  return (
    <>
      <NavBar /> 
      <Sai/>
      <Repositorios/>
    </>
  );
};
