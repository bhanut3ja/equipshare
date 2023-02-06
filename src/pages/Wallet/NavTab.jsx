import React from 'react';
import {Tab} from 'bootstrap';



const NavTab = ({tabLinks,tabContent}) => {

     // =======================================================
                const triggerTabList = document.querySelectorAll('button')
                triggerTabList.forEach(triggerEl => {
                  const tabTrigger = new Tab(triggerEl)
                
                  triggerEl.addEventListener('click', event => {
                    event.preventDefault()
                    tabTrigger.show()
                  })
                })
    // =======================================================
   


  return (
    <div className=''>
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            {
              tabLinks.map(({name,id,data_bs_target,aria_controls},index)=>(

                <button key={index} className={` nav-link text-secondary border ${index===0?('active'):('')}`}  id={id} data-bs-toggle="tab" data-bs-target={data_bs_target} type="button" role="tab" aria-controls={aria_controls} aria-selected="false">{name}</button>
              ))
            }
          </div>
      </nav>
          <div className="tab-content border" id="nav-tabContent">
            {
              tabContent.map(({id,aria_labeldby,content},index)=>(

                <div key={index} className={`tab-pane fade ${index===0?('active show'):('')}`} id={id} role="tabpanel" aria-labelledby={aria_labeldby} tabIndex="0">{content}</div>
              ))
            }
          </div>
    </div>
  )
}

export default NavTab