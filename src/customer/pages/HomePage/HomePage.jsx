import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_sport } from "../../../Data/mens_sport";
import { mens_daily } from "../../../Data/mens_daily";


const HomePage = ()=>{
    return(
    <div>
        <MainCarosel/>
        <div className="spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarosel data={mens_sport} sectionName={"SPORTWEAR"}/>
            <HomeSectionCarosel data={mens_daily} sectionName={"DAILY"}/>
        </div>
    </div>
    )
    
}
export default HomePage;