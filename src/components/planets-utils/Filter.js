import React, {useState, useEffect} from 'react';
import { Html } from '@react-three/drei';

function Filter({AllProjects, moreInfo, planetsMap, setLoading, SetTokensDetails, }) {

  const [searched, setSearched] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filtering, setFiltering] = useState(false);
  const [selectFilter, setSelectFilter] = useState();

  //console.log(AllProjects, "all");
        


  const searchToken = (e) => {
      console.log('in here', e.target.value);
      //const token = new RegExp(e.target.value, "i");
      setInputValue(e.target.value);

      const gottenItems = AllProjects.filter((element) => (
        element.tokenName?.includes(e.target.value) || element.contract_address?.includes(e.target.value) 
      ));
      
      console.log(gottenItems);

      setSearched(gottenItems);
  }


  const ourOwnClick = (data1, data2) => {
    moreInfo(data1, data2);
    setSearched([]);
  }


  const filterProjects = async (val) => {
    setSelectFilter(val);

    setLoading(true);
    const getp = await fetch(`https://web3planet.bintfinance.org/projects?projectType=${val}`, {
    method: 'GET',
        headers: {
            'Content-Type':'application/json',
        },
        });
    const valueGotten = await getp.json()

        console.log(valueGotten, "checking");

      SetTokensDetails(valueGotten.projects);
      setLoading(false)
  }
    


  useEffect(() => {
    
  }, [searched])



  return (
  <>
    <div className="absolute top-[50px] md:top-[20px] right-[49%] flex gap-[9px] items-center md:left-[20px] z-[999999]  w-[90%] md:w-[50%] translate-x-[50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0">

      <div className="border border-[#fff ] flex items-center rounded-md w-[100%] " >
          <input
              className=" bg-transparent outline-none w-full md:w-[700px] p-2 text-white px-4"
              type="text"
              placeholder="Search Project Name / contract_Address / Symbol"
              autoComplete='off'
              name="search"
              value={inputValue}
              onChange={ (e) => searchToken(e) }
          />
          <button className='bg-[#EEEADE] text-[#000]  outline-none h-[40px] text-center hover:bg-[#fff] p-[9px] z-[999999]  '>Search</button>
      </div>

      <div className="relative cursor-pointer" onClick={() => setFiltering(!filtering)} >

        <div className="flex flex-col md:flex-row">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#EEEADE"
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                />
              </svg>
              <div className="text-white">{selectFilter ? `Filtered by ${selectFilter}` : "Filter" }</div>
        </div>
            
           {
            filtering && 
             <div className="absolute p-5 md:right-0 right-[-37px] md:pr-0 pr-10 flex flex-col gap-[7px] bg-[#000] w-[200px] md:w-[150px] text-white z-[99999]">
                <div className="" onClick={() => filterProjects("Rank")} >Icon Rank</div>
                <div className="" onClick={() => filterProjects("Recent")} >Icon Recent</div>
                <div className="" onClick={() => filterProjects("Spotlight")} >Icon Spotlight</div>
                <div className="" onClick={() => filterProjects("Trending")} >Icon Trending</div>
                <div className="" onClick={() => filterProjects("")} >Icon None</div>
             </div>
           }
            
      </div>

    </div>



   
  <div className='flex flex-col gap-[12px] absolute md:top-[70px] top-[180px] left-[50%] translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 md:left-[20px] z-[999999] w-[92%] md:w-[50%] bg-[#000] z-[999999999999]'>
   {   (searched?.length !== 0 && inputValue !== "") &&
       <>
          { searched?.map((data, index) => {

               const getTexture = planetsMap.find(planet => planet.name === data.planet_name);

            return (      
              <div className='flex items-center bg-[#eeeade1f] shadow-sm text-[#fff] p-10  w-[100%] h-[10px] cursor-pointer' onClick={() => ourOwnClick(data, getTexture.image) } key={index}>
                  <img className="w-[10%] h-auto rounded" style={{ marginRight: '7px', width: '50px', height: '50px'}} src={data.img_url} />
                  <span className="token_list_text" style={{ fontSize: '16px' }}>{data.tokenName}</span>
                  
                  {/* Some kind of chart data */}
              </div>
              )
           })

          }
      </>
     }
   </div>

  </>
  )
}

export default Filter