import ReportTabs from '../../components/ReportTabs/ReportTabs';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={s.pageWrap}>
      <HeaderSection typePage="home" />
      <ReportTabs />
    </div>
  );
}
