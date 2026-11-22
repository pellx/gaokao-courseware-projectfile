import React from 'react';
import {AutoScene} from '../components/auto';

export const Material: React.FC = () => <AutoScene k="material" d={{"tag": "考点五", "title": "三大合成材料", "blocks": [{"t": "table", "at": "ma2", "head": ["类别", "例"], "cols": "1fr 2.6fr", "rows": [{"at": "ma2", "cells": ["{塑料}", "聚乙烯、聚氯乙烯、聚苯乙烯、酚醛树脂"]}, {"at": "ma2", "cells": ["{合成纤维}", "涤纶、锦纶（尼龙）、腈纶"]}, {"at": "ma2", "cells": ["{合成橡胶}", "顺丁橡胶、丁苯橡胶"]}], "size": 31, "rowHeight": 66}, {"t": "text", "at": "ma3", "text": "天然：棉花、羊毛、蚕丝、天然橡胶", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ma4", "text": "橡胶硫化：{网状结构}；PVC 不包装食品"}}} />;
