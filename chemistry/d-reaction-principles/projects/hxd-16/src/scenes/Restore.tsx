import React from 'react';
import {AutoScene} from '../components/auto';

export const Restore: React.FC = () => <AutoScene k="restore" d={{"tag": "考点六", "title": "电解后溶液的复原", "blocks": [{"t": "big", "at": "re1", "text": "{出什么，加什么}", "size": 50}, {"t": "table", "at": "re2", "head": ["电解", "出去的", "加入"], "cols": "1.2fr 1.2fr 1.2fr", "rows": [{"at": "re2", "cells": ["CuSO4 溶液", "Cu + O2", "{CuO}（或 CuCO3）"]}, {"at": "re3", "cells": ["NaCl 溶液", "H2 + Cl2", "{HCl 气体}"]}, {"at": "re1", "cells": ["Na2SO4 溶液", "H2 + O2", "H2O"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "易错", "at": "re4", "text": "Cu^2+ 耗尽后继续电解水：加 {Cu(OH)2}"}, "beat": {"k": "bean", "at": "re3b", "text": "少了什么\n就{补什么|red}"}}} />;
