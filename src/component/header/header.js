import React from 'react';
import Logo from '../logo';
import Button from '../button/button';
import BasicSelect from '../basicSelect';
// import mainRoutes from "../../routes/mainRoutes";

import styles from './header.module.scss'

const  Header = ()=> {
    const mainRoutes = [
        {name:"Մեր մասին", path:"Մեր-մասին"},
        {name:"Ընկերություններ", path:"Ընկերություններ"},
        {name:"Ուղեցույց", path:"Ուղեցույց"},
        {name:"Բլոգ", path:"Բլոգ"},
        {name:"Կոնտակտներ", path:"Կոնտակտներ"},
    ]

    return(
        <div className={styles.header}>
           <div className={styles.header_logo_link}>
               <Logo />
               <div className={styles.header_link}>
                  {mainRoutes?.map((item)=>{    
                     return(
                        <div  className={styles.link} key={item.path}>
                          {item.name}
                        </div>
                        ) 
                    })}
                </div>
           </div>
           <div className={styles.header_btn}>
             <Button className={styles.btn_login}>Մուտք</Button>
             <Button className={styles.btn_reg}>Գրանցվել</Button>
             <BasicSelect size={70} selectName={"Իմա"} className={styles.languages} />
           </div>
        </div>
    )
}
export default Header