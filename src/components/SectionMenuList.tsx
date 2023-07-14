import { Comida } from "./Comida";
import { breakFastObj } from "./ComidasBreakfast";
import { dinnerObj } from "./ComidasDinner";
import { lunchObj } from "./ComidasLunch";

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
              {breakFastObj.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
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
              {lunchObj.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
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
              {dinnerObj.map((element) => (
                <Comida
                  key={JSON.stringify(element)}
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
