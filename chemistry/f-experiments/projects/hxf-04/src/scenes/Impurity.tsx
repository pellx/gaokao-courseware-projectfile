import React from 'react';
import {AutoScene} from '../components/auto';

export const Impurity: React.FC = () => <AutoScene k="impurity" d={{"tag": "考点八", "title": "常见物质的除杂", "blocks": [{"t": "table", "at": "im1", "head": ["物质（杂质）", "试剂与方法"], "cols": "1.5fr 2.2fr", "rows": [{"at": "im1", "cells": ["CO2（HCl）", "饱和 NaHCO3 溶液"]}, {"at": "im1", "cells": ["CH4（C2H4）", "{溴水}"]}, {"at": "im2", "cells": ["FeCl2（FeCl3）", "{过量铁粉}，过滤"]}, {"at": "im2", "cells": ["NaHCO3（Na2CO3）", "通过量 CO2"]}, {"at": "im3", "cells": ["乙酸乙酯（乙酸）", "{饱和 Na2CO3}，分液"]}, {"at": "im3", "cells": ["溴苯（Br2）", "NaOH 溶液，分液"]}], "size": 29, "rowHeight": 54}], "callout": {"label": "易错", "at": "im4", "text": "乙酸乙酯不用 {NaOH}；苯中苯酚不用浓溴水"}}} />;
