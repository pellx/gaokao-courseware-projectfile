import React from 'react';
import {AutoScene} from '../components/auto';

export const Desulfur: React.FC = () => <AutoScene k="desulfur" d={{"tag": "考点六", "title": "脱硫与脱硝", "blocks": [{"t": "items", "items": [{"at": "ds1", "text": "石灰石脱硫：2CaCO3 + 2SO2 + O2 = {2CaSO4} + 2CO2"}, {"at": "ds2", "text": "氨法脱硫：→ (NH4)2SO4 化肥"}, {"at": "ds3", "text": "SCR 脱硝：4NH3 + 4NO + O2 = {4N2} + 6H2O"}], "size": 31}], "callout": {"label": "易错", "at": "ds4", "text": "脱硫{不减少} CO2 排放"}, "beat": {"k": "mugi", "at": "ds3b", "text": "污染物\n{变成无害或有用的|red}"}}} />;
