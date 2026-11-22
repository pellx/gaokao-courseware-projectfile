import React from 'react';
import {AutoScene} from '../components/auto';

export const Iodine: React.FC = () => <AutoScene k="iodine" d={{"tag": "考点七", "title": "海带提碘", "blocks": [{"t": "chain", "steps": [{"at": "io1", "text": "灼烧\n{坩埚}", "c": "red"}, {"at": "io1", "text": "浸泡、过滤"}, {"at": "io2", "text": "酸化\nH2O2 氧化", "c": "red"}, {"at": "io3", "text": "CCl4 萃取\n分液", "c": "orange"}, {"at": "io3", "text": "蒸馏"}], "arrows": [], "center": true, "size": 32}, {"t": "big", "at": "io2", "text": "2I^- + H2O2 + 2H^+ = I2 + 2H2O", "size": 40}], "callout": {"label": "易错", "at": "io4", "text": "灼烧用{坩埚}；CCl4 层在{下层}"}}} />;
