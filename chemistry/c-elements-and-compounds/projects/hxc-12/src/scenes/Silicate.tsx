import React from 'react';
import {AutoScene} from '../components/auto';

export const Silicate: React.FC = () => <AutoScene k="silicate" d={{"tag": "考点一", "title": "传统硅酸盐材料", "blocks": [{"t": "table", "at": "si2", "head": ["材料", "原料", "备注"], "cols": "0.8fr 2fr 1.6fr", "rows": [{"at": "si2", "cells": ["陶瓷", "{黏土}", "高温烧结"]}, {"at": "si3", "cells": ["普通玻璃", "{纯碱、石灰石、石英砂}", "Na2SiO3、CaSiO3、SiO2"]}, {"at": "si4", "cells": ["普通水泥", "{石灰石、黏土}", "加石膏调节凝结"]}], "size": 32, "rowHeight": 72}], "callout": {"label": "易错", "at": "si5", "text": "玻璃是{混合物}，没有固定熔点"}, "beat": {"k": "pottery", "at": "si2b", "text": "黏土高温烧出来\n= {陶瓷|red}"}}} />;
