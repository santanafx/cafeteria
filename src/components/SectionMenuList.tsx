import { Comida } from "./Comida";
import { comidasListaObj } from "../data/ComidasLista";
import { ComidaObj } from "../data/ComidasLista";

interface CardapiosProps {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
}

export const SectionMenuList = ({
  breakfast,
  lunch,
  dinner,
}: CardapiosProps) => {
  const breakfastItems: ComidaObj[] = comidasListaObj.filter(
    (item) => item.id <= 8
  );
  const lunchItems: ComidaObj[] = comidasListaObj.filter(
    (item) => item.id > 8 && item.id <= 16
  );
  const dinnerItems: ComidaObj[] = comidasListaObj.filter(
    (item) => item.id > 16 && item.id <= 24
  );

  return (
    <section className="menuListContainerBg">
      <div className="menuListContainer">
        {breakfast === true ? (
          <>
            <h4>Menu List</h4>
            <h1>BREAKFAST</h1>
          </>
        ) : (
          ""
        )}
        {lunch === true ? (
          <>
            <h4>Menu List</h4>
            <h1>Lunch</h1>
          </>
        ) : (
          ""
        )}
        {dinner === true ? (
          <>
            <h4>Menu List</h4>
            <h1>Dinner</h1>
          </>
        ) : (
          ""
        )}
        <div className="menuList">
          {breakfast === true ? (
            <>
              {breakfastItems.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
                  id={element.id}
                  imgLink={element.imgLink}
                  nomeComida={element.nomeComida}
                  descricaoComida={element.descricaoComida}
                  preco={element.preco}
                />
              ))}
            </>
          ) : (
            ""
          )}
          {lunch === true ? (
            <>
              {lunchItems.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
                  id={element.id}
                  imgLink={element.imgLink}
                  nomeComida={element.nomeComida}
                  descricaoComida={element.descricaoComida}
                  preco={element.preco}
                />
              ))}
            </>
          ) : (
            ""
          )}
          {dinner === true ? (
            <>
              {dinnerItems.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
                  id={element.id}
                  imgLink={element.imgLink}
                  nomeComida={element.nomeComida}
                  descricaoComida={element.descricaoComida}
                  preco={element.preco}
                />
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
