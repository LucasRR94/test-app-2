import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons.jsx";
import Content from "./components/Content/Content.jsx";
function App() {
  const [name, setName] = useState("Diogo Viana");
  return (
    <div className="flex flex-col w-full h-screen m-0 p-0">
      <Header name={name}></Header>
      <main className="flex justify-center content-center pt-4 bg-neutralgray w-full h-full">
        <article className="flex flex-col gap-4 w-full max-w-[536px]">
          <NavigationMenu
            currentPath="Home"
            operationTitle="Crédito Consignado"
          ></NavigationMenu>
          <Content></Content>
          <NavigationButtons
            backTitle="Voltar"
            nextPath="Simular empréstimo"
          ></NavigationButtons>
        </article>
      </main>
    </div>
  );
}

export default App;
