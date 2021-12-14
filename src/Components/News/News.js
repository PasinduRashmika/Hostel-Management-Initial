import React from "react";

import { NewsContainer, NewsHead, NewsBody, News } from "./NewsElements";
const news = () => {
  return (
    <NewsContainer>
      <NewsHead>News</NewsHead>
      <NewsBody>
        <News>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni officiis omnis ut eveniet non? Qui incidunt mollitia maiores ad! Ullam, temporibus! Quam deserunt odio natus alias neque officiis! Id, velit quia nobis aliquam accusantium maiores iusto quasi voluptatibus voluptatem commodi re</News>
        <News>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni officiis omnis ut eveniet non? Qui incidunt mollitia maiores ad! Ullam, temporibus! Quam deserunt odio natus alias neque officiis! Id, velit quia nobis aliquam accusantium maiores iusto quasi voluptatibus voluptatem commodi </News>
        <News>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni officiis omnis ut eveniet non? Qui incidunt mollitia maiores ad! Ullam, temporibus! Quam deserunt odio natus alias neque officiis! Id, velit quia nobis aliquam accusantium maiores iusto quasi voluptatibus voluptatem commodi </News>
      </NewsBody>
    </NewsContainer>
  );
};

export default news;
