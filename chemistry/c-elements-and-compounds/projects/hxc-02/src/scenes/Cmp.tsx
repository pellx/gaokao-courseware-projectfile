import React from 'react';
import {AutoScene} from '../components/auto';

export const Cmp: React.FC = () => <AutoScene k="cmp" d={{"tag": "考点一", "title": "Na2CO3 与 NaHCO3 的性质比较", "blocks": [{"t": "table", "at": "cm1", "head": ["比较项目", "Na2CO3", "NaHCO3"], "cols": "1.2fr 1.3fr 1.3fr", "rows": [{"at": "cm1", "cells": ["俗名", "纯碱、苏打", "小苏打"]}, {"at": "cm2", "cells": ["溶解度", "{较大}", "较小"]}, {"at": "cm2", "cells": ["同浓度碱性", "{较强}", "较弱"]}, {"at": "cm3", "cells": ["热稳定性", "{稳定}", "受热分解"]}], "size": 32, "rowHeight": 64}, {"t": "big", "at": "cm3", "text": "2NaHCO3 ═△═ Na2CO3 + CO2↑ + H2O", "size": 40}], "callout": {"label": "易错", "at": "cm4", "text": "NaHCO3：{碱性更弱、溶解度更小}"}, "beat": {"k": "twins", "at": "cm3b", "text": "长得几乎一样\n{靠性质差异区分|red}"}}} />;
