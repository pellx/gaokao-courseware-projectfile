import React from 'react';
import {AutoScene} from '../components/auto';

export const MRead: React.FC = () => <AutoScene k="mread" d={{"tag": "考点七", "title": "螺旋测微器的读数", "blocks": [{"t": "big", "at": "k2", "text": "读数 = {固定刻度} + {格数（估读一位）× 0.01 mm|orange}", "size": 40}, {"t": "items", "items": [{"at": "k1", "text": "固定刻度：看{半毫米刻线}是否露出"}, {"at": "k3", "text": "例：2.5 mm + 12.3 × 0.01 mm = {2.623 mm}"}, {"at": "k4", "text": "三位小数，又称{千分尺}"}], "size": 32}], "callout": {"label": "易错", "at": "k5", "text": "螺旋测微器{要估读}；别漏看{半毫米刻线}"}}} />;
