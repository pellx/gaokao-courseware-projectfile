import React from 'react';
import {AutoScene} from '../components/auto';

export const Aldol: React.FC = () => <AutoScene k="aldol" d={{"tag": "考点三", "title": "羟醛缩合", "blocks": [{"t": "big", "at": "al2", "text": "2CH3CHO →(稀 NaOH) CH3CH(OH){CH2}CHO", "size": 40}, {"t": "text", "at": "al3", "text": "△ 脱水 → {CH3CH=CHCHO} + H2O", "size": 36, "center": true}, {"t": "rule", "tag": "连接点", "at": "al4", "text": "α-碳连到另一个醛的{羰基碳}上", "c": "red", "size": 31}], "callout": {"label": "易错", "at": "al4", "text": "无 α-H 的醛（HCHO、苯甲醛）{只能当接受者}"}}} />;
