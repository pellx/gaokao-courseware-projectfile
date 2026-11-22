import React from 'react';
import {AutoScene} from '../components/auto';

export const Color: React.FC = () => <AutoScene k="color" d={{"tag": "考点八", "title": "颜色速查", "blocks": [{"t": "table", "at": "co1", "head": ["物质", "颜色"], "cols": "1.5fr 1fr", "rows": [{"at": "co1", "cells": ["Fe^3+ 溶液", "{黄色|orange}"]}, {"at": "co1", "cells": ["Fe^2+ 溶液", "{浅绿色|green}"]}, {"at": "co1", "cells": ["Fe(SCN)3 溶液", "{红色}"]}, {"at": "co2", "cells": ["Fe(OH)2 / Fe(OH)3", "白色 / {红褐色}"]}, {"at": "co3", "cells": ["Fe2O3 / FeO、Fe3O4", "红棕色 / 黑色"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "答题模板", "at": "co4", "text": "写全“{由什么颜色变为什么颜色}”或“{产生什么颜色的沉淀}”"}, "beat": {"k": "mint", "at": "co3b", "text": "薄荷绿\n{Fe^2+ 溶液是浅绿色|green}"}}} />;
