import React from "react";
import clsx from "clsx";
import Button from "../button";
import BasicSelect from "../basicSelect"
import { ReactComponent as Search } from '../svg/search.svg';
import { ReactComponent as Location } from '../svg/location.svg';
import { ReactComponent as Group } from '../svg/Group.svg';

import styles from "./infoBlock.module.scss";
import TextInput from "../textInput";

const InfoBlock = ({className})=>{
    return(
        <div className={clsx(className) }>
            <div className={styles.infoBlock}>
                <div className={styles.infoBlock_search}>
                   <Search className={styles.infoBlock_icon} />
                   <TextInput value= "Աշխատանքի անվանումը" type="text"/>
                </div>
                <div className={styles.infoBlock_location}>
                   <Location className={styles.infoBlock_icon} />
                   <BasicSelect size={220} height={60} selectName={"Աշխատանքի անվանումը"} />
                </div>
                <div className={styles.infoBlock_group}>
                  <Group className={styles.infoBlock_icon}/>
                  <BasicSelect size={220} height={60} selectName={"Իմացության մակարդակը"} />
                </div>
                <Button className={styles.btn}> Գտնել</Button>
            </div>
        </div>
    )
}

export default InfoBlock;