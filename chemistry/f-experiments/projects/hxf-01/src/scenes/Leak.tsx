import React from 'react';
import {AutoScene} from '../components/auto';

export const Leak: React.FC = () => <AutoScene k="leak" d={{"tag": "考点三", "title": "使用前检漏的仪器", "blocks": [{"t": "big", "at": "lk1", "text": "检漏：{容量瓶、滴定管、分液漏斗}", "size": 44}, {"t": "items", "items": [{"at": "lk2", "text": "容量瓶：倒立 → 瓶塞旋转 {180°} → 再倒立"}, {"at": "lk3", "text": "不能溶解、稀释、储存、加热"}], "size": 34}], "callout": {"label": "易错", "at": "lk4", "text": "容量瓶{不能润洗}"}, "beat": {"k": "akari", "at": "lk3b", "text": "有塞子的\n{先检漏|red}"}}} />;
