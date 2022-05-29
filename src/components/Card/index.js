import React from 'react'
import "./card.css"
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import InsightsIcon from '@mui/icons-material/Insights';

export default function Card({title, body, task, time, prod, value, setting, report}) {
  return (
    <article className="features__card">
        {/* <span className="icon-card task"></span> */}
        <div className='features__card--icon'>
            {task && (
                <TaskAltIcon fontSize='large' />
            )}
            {time && (
                <AccessTimeIcon fontSize='large' />
            )}
            {prod && (
                <InsightsIcon fontSize='large' />
            )}
            {value && (
                <AttachMoneyIcon fontSize='large' />
            )}
            {setting && (
                <SettingsIcon fontSize='large' />
            )}
            {report && (
                <AssignmentIcon fontSize='large' />
            )}
        </div>
        <div>
            <p className="product__card--title">{title}</p>
            <p className="product__card--body">{body}</p>
        </div>
    </article>
  )
}
