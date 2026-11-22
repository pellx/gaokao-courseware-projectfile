import React from 'react';
import {AutoScene} from '../components/auto';

export const Carbonyl: React.FC = () => <AutoScene k="carbonyl" d={{"tag": "考点六", "title": "醛、羧酸、酯的命名", "blocks": [{"t": "rule", "tag": "醛、羧酸", "at": "cb1", "text": "官能团碳{就是 1 号}", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "cb2", "text": "CH3CH(CH3)CHO：{2-甲基丙醛}"}, {"at": "cb3", "text": "CH3COOCH2CH3：{乙酸乙酯}"}, {"at": "cb3", "text": "HCOOCH3：{甲酸甲酯}"}], "size": 33}], "callout": {"label": "易错", "at": "cb4", "text": "醛基、羧基{不用标位置}"}}} />;
