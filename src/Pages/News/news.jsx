import React from 'react'

import './news.css'
import Articles from '../../Components/NewsCard/card'
import Footer from '../../Components/Footer/footer'

const news =()=> {
    const articles = [
        {
          image: "https://via.placeholder.com/300",
          title: "The issuance of vehicle revenue licenses in the Western Province is temporarily suspended",
          description:
            "Transport Ministry Secretary KCN Perera says that the issuance of vehicle revenue licenses has been temporarily suspended in the Western Province.",
          link: "/article-1",
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Sri Lanka to relax all import controls except cars by December",
          description:
            "2023 දසම්බර් මාසයට පෙර රථ වාහන කාන්ඩය හැර අනෙකුත් රාජ්‍ය අයිති ආනයන සීමා ඉවත් කෙරෙන බව...",
          link: "/article-2",
        },
        {
          image: "https://via.placeholder.com/300",
          title: "Break Free from Fossil Fuels",
          description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
          link: "/article-3",
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Break Free from Fossil Fuels",
            description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
            link: "/article-3",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Break Free from Fossil Fuels",
            description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
            link: "/article-3",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Break Free from Fossil Fuels",
            description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
            link: "/article-3",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Break Free from Fossil Fuels",
            description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
            link: "/article-3",
          },
          {
            image: "https://via.placeholder.com/300",
            title: "Break Free from Fossil Fuels",
            description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
            link: "/article-3",
          },
      ];
    
      return (
        <div>
          <h1 style={{ textAlign: "center", margin: "20px 0" }}>Latest Articles</h1>
          <Articles articles={articles} />
          <Footer/>

        </div>
      );
}

export default news