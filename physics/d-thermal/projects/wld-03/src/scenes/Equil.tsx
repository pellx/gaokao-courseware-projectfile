import React from 'react';
import {AutoScene} from '../components/auto';

export const Equil: React.FC = () => <AutoScene k="equil" d={{"tag": "考点二", "title": "平衡态", "blocks": [{"t": "rule", "tag": "平衡态", "at": "e1", "text": "无外界影响时，状态参量{不随时间变化}", "c": "red"}, {"t": "text", "at": "e2", "text": "热水放在房间里，足够长时间后水温{不再变化|orange}", "size": 34}, {"t": "text", "at": "e2b", "text": "{动态平衡|orange}：分子仍在运动，宏观参量不变", "size": 34}], "callout": {"label": "要点", "at": "e3", "text": "前提是{没有外界影响}"}}} />;
