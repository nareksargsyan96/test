import Heading from "../../../../component/heading";
import BasicSelect from "../../../../component/basicSelect";

import styles from "./searchWork.module.scss";

const SearchWork = () => {
  return (
    <div className={styles.search_work}>
      <Heading className={styles.heading}>
        Գտեք Ձեզ համապատասխան աշխատանքը մեր օգնությամբ
      </Heading>

      <Heading variant="h1" className={styles.heading}>
        Գտեք Ձեզ համապատասխան աշխատանքը մեր օգնությամբ
      </Heading>

      <div className={styles.select}>
        <BasicSelect
          borderSelect
          className={styles.applicant}
          selectName="Դիմորդի համար"
          size={223}
        />
        <BasicSelect
          borderSelect
          className={styles.employer}
          colors={"white"}
          selectName="Գործատուի համար"
          size={223}
        />
      </div>
    </div>
  );
};
export default SearchWork;
