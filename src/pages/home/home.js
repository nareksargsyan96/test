import InfoBlock from "../../component/infoBlock";
import SearchWork from "./component/searchWork/searchWork";
import ShowJobs from "./component/showJobs/showJobs";
import Vacancies from "./component/vacancies/vacancies";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <InfoBlock className={styles.infoBlock} />
      <SearchWork />
      <ShowJobs />
      <Vacancies />
    </div>
  );
};

export default Home;
