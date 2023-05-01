
import bookstore from '../assets/bookstore.png'
import news from '../assets/newszone-min.png'
import textutil from '../assets/textanalyzer.png'
import tictactoe from '../assets/tictactoe.png'
import Wcounter from '../assets/wordcounter.png'
import cab from '../assets/cab.jpg'
import {FiLink2} from 'react-icons/fi'

const Project=()=>{


    const images=[
      {id:1,url:'https://github.com/Hithaish2001/NewsZone',images: news, title:'Newsapp(ReactJS)'},
      {id:2,url:'https://github.com/Hithaish2001/TextUtils ',images: textutil, title:'Text Analyser(ReactJS)'},
      {id:3,url:'https://github.com/Hithaish2001/onlilne-book-store',images: bookstore, title:'online Book Store(php)'},
      {id:4,url:'https://github.com/Hithaish2001/TicTacToe ',images: tictactoe, title:'TicTacToe(js)'},
      {id:5,url:'https://github.com/Hithaish2001/word-counter',images: Wcounter, title:'Word and Character counter(js)'},
      {id:6,url:'https://github.com/Hithaish2001/DBMS-project',images: cab, title:'Cab Management(DBMS)'}
    ];

  return (
    
    <div id="projects" className='bg-white w-full h-auto justify-center items-center flex flex-col dark:bg-black-gray'>
        <div className="w-full sm:min-h-screen h-fit py-24 sm:py-0">

            <div className="w-full text-center"><p className='text-5xl sm:text-6xl font-bold font-mono pb-12 sm:py-12 text-black dark:text-white'>PROJECTS</p></div>
            
            <div className=' w-full mx-auto sm:px-20 sm:pl-44 justify-center items-center grid grid-cols-2 gap-6 md:grid-cols-3 px-10 md:gap-6 '>
              {images.map((items)=>(
                <div key={items.id} className='w-full md:h-56 relative  rounded-md group overflow-hidden cursor-pointer hover:shadow-xl dark:hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-amber-100 ring-1 ring-black'>
                  
                    <a href={items.url} rel='noreferrer' target='_blank' className='relative '>
                      <img src={items.images} alt="" className='w-full h-full rounded-md opacity-100 group-hover:opacity-75 relative z-10 scale-100 group-hover:scale-105 transition-all duration-500 ease-out origin-top object-cover'/>
                    </a>

                    <div className='w-full h-full absolute bg-black/40 opacity-0 hover:opacity-100 justify-center items-center flex  rounded-md z-40 top-0 left-0 flex-col '>
                      <div className='text-white opacity-0 group-hover:opacity-100 scale-[1.3] text-sm text-center  md:text-xl group-hover:scale-[1] transition-all ease-out duration-700'>
                        {items.title}
                      </div>
                      <div className='text-white animate-animation1-bounce pt-3'><FiLink2 size={30}/></div>
                    </div>
                    
                </div>
              ))}          
            </div> 
        
        </div>  
    </div>
  )
}

export default Project




  // const [current,setCurrent]=useState(0)


  // const previous=()=>{
  //   if (current===0) {
  //     setCurrent(slides.length-1)
  //   }else{
  //     setCurrent(current-1)
  //   }
  // }

  // const next=()=>{
  //   if (current===slides.length-1) {
  //     setCurrent(0)
  //   }else{
  //     setCurrent(current+1)
  //   }
  // }

  // const show=(slideIndex)=>{
  //   setCurrent(slideIndex)
  // }

// {/* right button */}
//            {/* <div className="relative">
//             <div className='absolute top-[50%] translate-x-[435px] translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-110 duration-[600ms] ' onClick={next}>
//               <BsChevronCompactRight size={40}/>
//             </div>
//           </div> */}



 // <div className="absolute flex justify-center items-center ">
          //   <div name='mainImg' className='w-[790px] h-[490px]  bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-300 -translate-y-3 hover:scale-105 duration-500 '>
          //     <img src={`${slides[current].url}`} alt='' className='h-full rounded-2xl '></img>
          //   </div>
          // </div>   



//            {/* left button */}
//            {/* <div className='relative '>
//             <div className='absolute top-[50%] -translate-x-[435px] translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-110 duration-[600ms] ' onClick={previous}>
//                <BsChevronCompactLeft size={40}/>
//              </div>
//            </div>
//                */}
            

//             {/* dots below image slider */}
//          {/* <div className='flex space-x-3 pt-16'>
//            {slides.map((slide,slideIndex)=>(
//              <div key={slideIndex} onClick={()=>show(slideIndex)} className={`flex text-gray-600 cursor-pointer  hover:text-black `}>
//                <GoPrimitiveDot size={20}/>
//              </div>
//            ))}
//          </div> */}
        



          // in case the above code dosen't work use this for the main image slider( BACKUP CODE )  

         
