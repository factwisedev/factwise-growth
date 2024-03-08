const data = [{
    "id":"1",
    "question" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
    "answer" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore distinctio laudantium animi temporibus vitae itaque, tempora aut velit sequi quos in soluta deleniti, recusandae possimus obcaecati quisquam consectetur quaerat!"
},
{    "id":"2",
    "question" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
    "answer" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore distinctio laudantium animi temporibus vitae itaque, tempora aut velit sequi quos in soluta deleniti, recusandae possimus obcaecati quisquam consectetur quaerat!"
},{
    "id":"3",
    "question" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
    "answer" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore distinctio laudantium animi temporibus vitae itaque, tempora aut velit sequi quos in soluta deleniti, recusandae possimus obcaecati quisquam consectetur quaerat!"
},{
    "id":"4",
    "question" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
    "answer" :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore distinctio laudantium animi temporibus vitae itaque, tempora aut velit sequi quos in soluta deleniti, recusandae possimus obcaecati quisquam consectetur quaerat!"
},
]
const FAQs =  () => {
    return (<>
    
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {data.map((faq) => (
            <div key={faq.id} className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls={`${faq.id}-collapse`}>
                {faq.question}
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id={`${faq.id}-collapse`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <p className="text-gray-800 dark:text-gray-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>)}

export default FAQs