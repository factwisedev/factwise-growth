import { useState } from 'react';
import OutputCard from "../components/OutputCard";
import SkeletonAIContent from "../components/SkeletonAIContent";

import "../assets/4362227-200.png"




const AIContent = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    // Show the skeleton
    setShowSkeleton(true);
    setShowCard(false); // Ensure the card is not shown if the button is clicked again before the card appears

    // Hide the skeleton and show the card after 2 seconds
    setTimeout(() => {
      setShowSkeleton(false);
      setShowCard(true);
    }, 2000);
  };

  return (
    <>
{/* <!-- Content --> */}
<div className="h-screen flex flex-col pb-6">
  <div className="h-full flex flex-col mt-10">
    <div className="-mt-10 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
 

    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Welcome to <span className="text-blue-600">FactWise AI</span></h1>
     
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Your AI-powered SEO writing assistant 
      </p>
    </div>

    {/* <!-- Search --> */}
    <div className="mt-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid  grid-cols-12  gap-3">
    <div className="col-span-5"><div className="relative">
  <select data-hs-select='{
      "placeholder": "Select your Industry",
      "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "dropdownClasses": "mt-2 max-h-72 p-0 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
      "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
      "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
    }' className="hidden">
    <option value="">Choose</option>
    <option value="1" data-hs-select-option='{
      "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"https://banner2.cleanpng.com/20180713/qat/kisspng-computer-icons-engineering-icon-design-technical-support-5b48fc33ddbdc8.7842077215315098119083.jpg\" alt=\"Icon of Industry\" />"}'>
      Health
    </option>

    <option value="2" data-hs-select-option='{
      "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"https://banner2.cleanpng.com/20180713/qat/kisspng-computer-icons-engineering-icon-design-technical-support-5b48fc33ddbdc8.7842077215315098119083.jpg\" alt=\"Icon of Industry\" />"}'>
      Engineering
    </option>

    <option value="3" data-hs-select-option='{
      "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"https://banner2.cleanpng.com/20180713/qat/kisspng-computer-icons-engineering-icon-design-technical-support-5b48fc33ddbdc8.7842077215315098119083.jpg\" alt=\"Icon of Industry\" />"}'>
      Insurance
    </option>
  </select>

  <div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
  </div>
</div></div>
  <div className="col-span-5"> <div className="relative">
  <select multiple data-hs-select='{
      "placeholder": "Select Keywords...",
      "toggleTag": "<button type=\"button\"></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
      "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
      "mode": "tags",
      "tagsClasses": "relative ps-0.5 pe-9 min-h-[46px] flex items-center flex-wrap text-nowrap w-full border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "tagsItemTemplate": "<div class=\"flex flex-nowrap items-center relative z-10 bg-white border border-gray-200 rounded-full p-1 m-1 dark:bg-slate-900 dark:border-gray-700\"><div class=\"size-6 me-1\" data-icon></div><div class=\"whitespace-nowrap\" data-title></div><div class=\"inline-flex flex-shrink-0 justify-center items-center size-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:text-gray-400 cursor-pointer\" data-remove><svg class=\"flex-shrink-0 size-3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></div></div>",
      "tagsInputClasses": "absolute inset-0 w-full border-gray-100 py-3 px-4 pe-9 flex-1 text-sm rounded-lg focus-visible:ring-0 dark:bg-slate-900 dark:text-gray-400",
      "optionTemplate": "<div class=\"flex items-center\"><div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-gray-800 dark:text-gray-200\" data-title></div><div class=\"text-xs text-gray-500\" data-description></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
    }' >
    <option value="">Choose</option>
    <option value="1" >Keyword 1</option>

    <option value="2" >Keyword 2</option>

    <option value="3" >Keyword 3</option>

    <option value="4" >Keyword 4</option>
  </select>
  {/* <!-- Select --> */}

{/* <!-- End Select --> */}
  <div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
  </div>
</div></div>
<div className="col-span-1">
  <div className="px-2 items-center justify-center">
<button onClick={handleClick} type="button" className="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                  
                                      <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                      </svg>
                                    </button>
                                    </div>
</div>

</div>

 
{showSkeleton && <SkeletonAIContent />}
      {showCard && <OutputCard />}
    </div>
    <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-xs text-gray-600 dark:text-gray-500">© Factwise AI</p>
  </footer>
  </div>

 
</div>
{/* <!-- End Content --> */}
    </>
  );
};

export default AIContent;