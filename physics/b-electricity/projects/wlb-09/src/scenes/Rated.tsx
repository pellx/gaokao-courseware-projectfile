import React from 'react';
import {AutoScene} from '../components/auto';

export const Rated: React.FC = () => <AutoScene k="rated" d={{"tag": "考点七", "title": "额定功率与实际功率", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "额定值", "at": "g1", "lines": ["铭牌标注", "额定电压、额定功率", {"at": "g2", "text": "额定电压下的功率"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "实际值", "at": "g3", "lines": ["随实际电压改变", "U_实 < U_额 → {P_实 < P_额}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "g4", "text": "实际功率由{实际电压}决定"}}} />;
