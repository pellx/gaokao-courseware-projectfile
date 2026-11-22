import React from 'react';
import {AutoScene} from '../components/auto';

export const Substance: React.FC = () => <AutoScene k="substance" d={{"tag": "考点四", "title": "古籍中的物质", "blocks": [{"t": "table", "at": "su1", "head": ["古名", "化学式", "考点"], "cols": "1fr 1.6fr 1.8fr", "rows": [{"at": "su1", "cells": ["硝石", "KNO3", "焰色紫色"]}, {"at": "su2", "cells": ["胆矾", "CuSO4·5H2O", "与 Fe {置换}"]}, {"at": "su3", "cells": ["绿矾", "FeSO4·7H2O", "—"]}, {"at": "su3", "cells": ["朱砂", "HgS", "加热得 Hg"]}, {"at": "su3", "cells": ["草木灰", "{K2CO3}", "溶液显碱性"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "易错", "at": "su4", "text": "焰色：{物理变化}；熬胆矾铁釜：{氧化还原}"}, "beat": {"k": "fox", "at": "su3b", "text": "古名先\n{翻译成化学式|red}"}}} />;
