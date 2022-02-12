import {Link} from'react-router-dom'
import s from './BalanceContainer.module.scss'
import { BalanceForm } from '../BalanceForm/BalanceForm'
import { ReportLink } from '../ReportLink/ReportLink'

export function BalanceContainer() {

    return (
        <div className={s.container}>
        <ReportLink></ReportLink>
        <BalanceForm></BalanceForm>
        </div>
    )
}