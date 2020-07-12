 import React from 'react'
import Slider from './slider/Slider';
import NewsType from './newsType/NewsType.';
 
import HotNews from './hotnews/HotNews';
import LatestNews from './latestnews/LatestNews';
 
 function Home() {
  const sports=[{"id":1,
  "blotTitle":"Fitness Mantra To Live Fit LifeRecent",
  "blogImage":"narendra.jpg",
  "PostedON":"02 March 2020"
  },
  {"id":2,
  "blotTitle":"Fitness Mantra To Live Fit LifeRecent",
  "blogImage":"dhoni.jpg",
  "PostedON":"03 March 2020"
  },
{"id":2,
  "blotTitle":"Fitness Mantra To Live Fit LifeRecent",
  "blogImage":"dhoni.jpg",
  "PostedON":"03 March 2020"
  }  ]

const politics=[{"id":1,
"blotTitle":"Fitness Mantra To Live Fit LifeRecent",
"blogImage":"sushant.jpg",
"PostedON":"04 March 2020"
},
{"id":2,
"blotTitle":"Fitness Mantra To Live Fit LifeRecent",
"blogImage":"dhoni.jpg",
"PostedON":"05 March 2020"
} ,
{"id":2,
  "blotTitle":"Fitness Mantra To Live Fit LifeRecent",
  "blogImage":"dhoni.jpg",
  "PostedON":"03 March 2020"
  } ]     

const film= [{"id":1,
"blotTitle":"Fitness Mantra To Live Fit LifeRecent",
"blogImage":"dhoni.jpg",
"PostedON":"06 March 2020"
},
{"id":2,
"blotTitle":"Fitness Mantra To Live Fit LifeRecent",
"blogImage":"dhoni.jpg",
"PostedON":"07 March 2020"
},
{"id":2,
  "blotTitle":"Fitness Mantra To Live Fit LifeRecent",
  "blogImage":"dhoni.jpg",
  "PostedON":"03 March 2020"
  } 
  ]
   return (
     <div>
       <Slider/>
       <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', marginBottom:'10px'}}>
       <NewsType avtar="N" title="Narendra Modi" date="July 06, 2020"  image="narendra.jpg"  content="I bow to Dr. Syama Prasad Mookerjee on his Jayanti. A devout patriot, he made exemplary contributions towards India’s development. He made courageous efforts to further India’s unity. His thoughts and ideals give strength to millions across the nation."/>
       <NewsType avtar="D" title="Mahendra Singh Dhoni" date="Februray 14, 2020"  image="dhoni.jpg" content="When u spot the tiger on ur own and he obliges u with just enough time to click a few pics.Visit to kanha was outstanding "/>
       <NewsType avtar="S" title="Sushant Singh Rajpoot" date="December 27, 2019" image="sushant.jpg"  content="Right from exploring the local tourist attractions to experiencing the culture from a closer lens, it was just perfect! And what made it better was to get upto 5% cashback every-time I swiped my"/>
       </div>
       <LatestNews/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <HotNews title="Sports" newsType={sports}/>
        <HotNews title="Politics" newsType={politics}/>
        <HotNews title="Film Industry" newsType={film}/>
        </div>
      
     </div>
   )
 }
 
 export default Home
 