import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

type Props = {};

const Grid = (props: Props) => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id, title, description, img, className, imgClassName, titleClassName, spareImg}, index) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            img={img}
            className={className}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}            
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
