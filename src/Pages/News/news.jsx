import React from 'react'

import './news.css'
import Articles from '../../Components/NewsCard/card'
import Footer from '../../Components/Footer/footer'

const news =()=> {
    const articles = [
        {
          image: "https://th.bing.com/th/id/OIP.qu4Cjy4NhINGCCYAComq3AHaEM?rs=1&pid=ImgDetMain",
          title: "The issuance of vehicle revenue licenses in the Western Province is temporarily suspended",
          description:
            "Transport Ministry Secretary KCN Perera says that the issuance of vehicle revenue licenses has been temporarily suspended in the Western Province.",
          link: "https://autome.lk/articles/view/the-issuance-of-vehicle-revenue-licenses-in-t/19",
        },
        {
          image: "https://th.bing.com/th/id/OIP.jqnAGd-CUjSPxDaPvOsycQHaEL?rs=1&pid=ImgDetMain",
          title: "Sri Lanka to relax all import controls except cars by December",
          description:
            "2023 දසම්බර් මාසයට පෙර රථ වාහන කාන්ඩය හැර අනෙකුත් රාජ්‍ය අයිති ආනයන සීමා ඉවත් කෙරෙන බව...",
          link: "https://autome.lk/articles/view/sri-lanka-to-relax-all-import-controls-except/18",
        },
        {
          image: "https://www.environewsnigeria.com/wp-content/uploads/2016/05/fossil-free.jpg",
          title: "Break Free from Fossil Fuels",
          description: "An effort to promote sustainable energy and reduce dependency on fossil fuels through global awareness campaigns.",
          link: "/article-3",
        },
        {
            image: "https://buzzer.lk/wp-content/uploads/2022/09/electric_cars.jpg",
            title: "Circular issued permitting Sri Lankan migrant workers to import electric vehicle",
            description: "Sri Lanka’s Foreign Employment Minister Manusha Nanayakkara has issued a circular allowing migrant workers..",
            link: "https://buzzer.lk/the-circular-related-to-the-import-of-electric-vehicles-will-be-issued-to-foreign-workers/",
          },
          {
            image: "https://www.onlanka.com/wp-content/uploads/2019/01/budget-in-sri-lanka-parliament.jpg",
            title: "Budget 2022 : What will happen to Vehicle prices ? VIAL responds",
            description: "Vehicle Importers' Association of Sri Lanka (VIAL) has warned that prices of reconditioned vehicles will increase in the coming weeks.",
            link: "https://www.treasury.gov.lk/web/budget-estimates",
          },
          {
            image: "https://www.roojai.com/wp-content/uploads/2024/09/how-to-transfer-car-en-1.jpg",
            title: "Registration of Ownership Transfer",
            description: "Obtain the relevant form set containing MTA 6 and MTA 8 forms either from the Department of Motor Traffic...",
            link: "/article-3",
          },
          {
            image: "https://adaderanaenglish.s3.amazonaws.com/1701324394-driving-licenses-6.jpg",
            title: "New Driving License- Online ",
            description: "How to obtain the new smart card Driving License via online",
            link: "/article-3",
          },
          {
            image: "https://transportday.com.ng/wp-content/uploads/2020/06/CLOAKER-CAR.jpg",
            title: "How to spot and avoid clocked, stolen or unsafe cars",
            description: "Buying a used car should be an exciting experience. To make sure it is, follow our tips below to avoid buying a car that..",
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