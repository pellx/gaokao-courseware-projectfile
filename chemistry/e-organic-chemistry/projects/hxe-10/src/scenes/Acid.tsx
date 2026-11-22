import React from 'react';
import {AutoScene} from '../components/auto';

export const Acid: React.FC = () => <AutoScene k="acid" d={{"tag": "考点六", "title": "苯酚的弱酸性", "blocks": [{"t": "big", "at": "ac2", "text": "H2CO3 > {C6H5OH} > HCO3^-", "size": 46}, {"t": "items", "items": [{"at": "ac1", "text": "与 NaOH 反应：浑浊 → {澄清}"}, {"at": "ac3", "text": "C6H5ONa + CO2 + H2O → C6H5OH + {NaHCO3}"}, {"at": "ac2", "text": "不与 NaHCO3 反应，不使石蕊变色"}], "size": 32}], "callout": {"label": "易错", "at": "ac4", "text": "苯酚与 Na2CO3 反应，{不放出 CO2}"}, "beat": {"k": "rose", "at": "ac3b", "text": "酸性\n碳酸 > {苯酚|red} > 碳酸氢根"}}} />;
