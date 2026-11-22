import React from 'react';
import {AutoScene} from '../components/auto';

export const Inorganic: React.FC = () => <AutoScene k="inorganic" d={{"tag": "考点三", "title": "新型无机非金属材料", "blocks": [{"t": "table", "at": "in31", "head": ["材料", "用途"], "cols": "1.4fr 2.4fr", "rows": [{"at": "in31", "cells": ["{Si}", "芯片、太阳能电池板"]}, {"at": "in31", "cells": ["{SiO2}", "光导纤维"]}, {"at": "in32", "cells": ["SiC、Si3N4", "高温结构陶瓷、轴承"]}, {"at": "in33", "cells": ["石墨烯、碳纳米管", "碳的{同素异形体}"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "易错", "at": "in34", "text": "芯片 {Si}，光纤 {SiO2}"}, "beat": {"k": "yellow", "at": "in33b", "text": "Si 与 SiO2\n{一字之差，用途不同|red}"}}} />;
