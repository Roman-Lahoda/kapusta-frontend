import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import 'react-tabs/style/react-tabs.css';
import s from './ReportTabs.module.css';
import { useMediaQuery } from 'react-responsive';
import ButtonBlock from '../ButtonBlock/ButtonBlock';
import ReportTable from '../ReportTable/ReportTable';
import Modal from '../Modal/Modal';
// import Summary from 'components/Summary/Summary';
import FormDescription from '../FormDescription/FormDescription';
// import { getCategoriesList } from '../../redux/categories';
// import { getUserBalance } from '../../redux/balance';
// import {
//   getTransactionsByMonts,
//   getTransactionsList,
//   removeTransaction,
// } from '../../redux/transactions';
// import { getReportList } from '../../redux/report';
import { AiOutlinePlus } from 'react-icons/ai';
import FormDescriptionModal from '../Modal/FormDescriptionModal';

const DEFAULT_CLASS = 'react-tabs__tab';
const DEFAULT_SELECTED_CLASS = `${DEFAULT_CLASS}--selected`;

const CustomTab = ({ className, selectedClassName, ...props }) => (
  <Tab
    className={`${DEFAULT_CLASS}, ${className}`}
    selectedClassName={`${DEFAULT_SELECTED_CLASS}, ${selectedClassName}`}
    {...props}
  />
);

CustomTab.tabsRole = 'Tab';

export default function ReportTabs() {
  const [showModal, setShowModal] = useState(false);
  const [remove, setRemove] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [calendar, setCalendar] = useState(new Date());
  const [transType, setTransType] = useState(false);
  const [queryDate, setQueryDate] = useState('');
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

  // получаем все транзакции за месяц (доход и расход)
  // const transactions = useSelector(getTransactionsList);
  // const income = transactions.filter(trans => trans.type);
  // const outcome = transactions.filter(trans => !trans.type);

  // формируем дату с календаря
  let month = calendar.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const year = calendar.getFullYear();
  const date = `${year}${month}`;

  const getDate = newdata => {
    setCalendar(newdata);
  };
  const onSummaryClick = date => {
    setQueryDate(date);
  };

  // useEffect(() => {
  //   dispatch(getTransactionsByMonts(queryDate));
  // }, [dispatch, queryDate]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  // useEffect(() => {
  //   dispatch(getCategoriesList());
  //   dispatch(getTransactionsByMonts(date));
  // }, [calendar, date, dispatch, transType]);

  const handleDelete = (id, type) => {
    setShowModal(true);
    setCurrentTransaction(id);
    setTransType(type);
  };

  // useEffect(() => {
  //   if (!remove) {
  //     return;
  //   }
  //   const updateReportList = type => {
  //     let reportType;
  //     type === true ? (reportType = 'i') : (reportType = 'o');
  //     dispatch(
  //       getReportList({
  //         reportType: reportType,
  //         year: new Date().getFullYear(),
  //       }),
  //     );
  //   };
  //   const getUser = async () => {
  //     await dispatch(removeTransaction(currentTransaction));
  //     updateReportList(transType);
  //     dispatch(getUserBalance());
  //   };
  //   getUser();
  //   setShowModal(false);
  //   setRemove(false);
  // }, [currentTransaction, dispatch, remove, transType]);

  const hidden = () => {
    const body = document.querySelector('body');
    body.style.overflow = isVisible ? 'auto' : 'hidden';
  };

  const toggleModal = () => {
    hidden();
    return isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <>
      <Tabs className={s.tabsContainer} selectedTabClassName={s.isSelected}>
        <TabList className={s.tabsList}>
          <CustomTab className={`${s.commonTab}`}>Расход</CustomTab>
          <CustomTab className={`${s.commonTab}`}>Доход</CustomTab>
        </TabList>
        <div className={s.tabsWrap}>
          <TabPanel>
            {isMobile && (
              <button type="button" onClick={toggleModal} className={s.addBtn}>
                <AiOutlinePlus size="18" color="#ffffff" />
              </button>
            )}
            {isVisible && isMobile && (
              <FormDescriptionModal
                toggleModal={toggleModal}
                typeForm={false}
                dateFinder={getDate}
              />
            )}
            {!isMobile && <FormDescription typeForm={false} dateFinder={getDate} />}
            <div className={s.wrapper}>
              <ReportTable
                type={false}
                transactions={outcome}
                handleDelete={handleDelete}
              ></ReportTable>
              {isDesktop && <Summary reportType="o" year={year} onSummaryClick={onSummaryClick} />}
            </div>
            {isTablet && <Summary reportType="o" year={year} onSummaryClick={onSummaryClick} />}
          </TabPanel>
          <TabPanel>
            {isMobile && (
              <button type="button" onClick={toggleModal} className={s.addBtn}>
                <AiOutlinePlus size="18" color="#ffffff" />
              </button>
            )}
            {isVisible && isMobile && (
              <FormDescriptionModal
                toggleModal={toggleModal}
                typeForm={true}
                dateFinder={getDate}
              />
            )}
            {!isMobile && <FormDescription typeForm={true} dateFinder={getDate} />}
            <div className={s.wrapper}>
              <ReportTable
                type={true}
                transactions={income}
                handleDelete={handleDelete}
              ></ReportTable>
              {/* {isDesktop && <Summary reportType="i" year={year} onSummaryClick={onSummaryClick} />} */}
            </div>
            {/* {isTablet && <Summary reportType="i" year={year} onSummaryClick={onSummaryClick} />} */}
          </TabPanel>
        </div>
      </Tabs>
      <TransitionGroup>
        {showModal && (
          <CSSTransition classNames="option" timeout={1000}>
            <Modal text="Вы уверены?" onClose={() => setShowModal(false)}>
              <ButtonBlock
                firstButtonText="Да"
                secondButtonText="Нет"
                firstButtonHandler={() => {
                  setRemove(true);
                }}
                secondButtonHandler={() => {
                  setRemove(false);
                  setShowModal(false);
                }}
                firstButtonType="button"
                secondButtonType="button"
              ></ButtonBlock>
            </Modal>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}
