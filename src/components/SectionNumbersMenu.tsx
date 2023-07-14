// import React from "react";

export const SectionNumbersMenu = () => {
  // React.useEffect(() => {
  //   const counters = document.querySelectorAll(".numbersMenucounter");

  //   counters.forEach((counter) => {
  //     const initialCount = 0;
  //     const dataSet = counter.dataset.count as string;
  //     const finalCount = Number(dataSet);

  //     console.log(initialCount);
  //     console.log(finalCount);

  //          const counting = setInterval((updateCounting,1)=>{
  //     function updateCounting(){
  //       initialCount= initialCount+1;
  //       counter.innerText = initialCount;

  //       if(initialCount >= finalCount){
  //         clearInterval(counting);
  //       }
  //     }
  //           },1)
  //   });
  // });

  return (
    <section className="numbersMenuContainerBg">
      <div className="numbersMenuContainer">
        <div className="numbersMenuImgs">
          <img src="./images/mao-bandeja.png" alt="" />
          <div>
            <p className="numbersMenucounter" data-count="35">
              35 +
            </p>
            <span>Years Experience</span>
          </div>
        </div>
        <div className="numbersMenuImgs">
          <img src="./images/bife.png" alt="" />
          <div>
            <p className="numbersMenucounter" data-count="273">
              273 +
            </p>
            <span>Our Available Dishes</span>
          </div>
        </div>
        <div className="numbersMenuImgs">
          <img src="./images/pessoa.png" alt="" />
          <div>
            <p className="numbersMenucounter" data-count="500">
              500 K
            </p>
            <span>Our Happy Client</span>
          </div>
        </div>
        <div className="numbersMenuImgs">
          <img src="./images/loja.png" alt="" />
          <div>
            <p className="numbersMenucounter" data-count="144">
              114
            </p>
            <span>Our New Branches</span>
          </div>
        </div>
      </div>
    </section>
  );
};
