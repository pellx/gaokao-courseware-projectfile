import React from 'react';
import {AutoScene} from '../components/auto';

export const Color: React.FC = () => <AutoScene k="color" d={{"tag": "考点五", "title": "颜色与状态速查", "blocks": [{"t": "table", "at": "co1", "head": ["颜色", "物质"], "cols": "1fr 3fr", "rows": [{"at": "co1", "cells": ["{淡黄色|orange}", "Na2O2、S、AgBr"]}, {"at": "co1", "cells": ["{黄色|orange}", "AgI、Fe^3+ 溶液"]}, {"at": "co2", "cells": ["{红棕色}", "Fe2O3、NO2、溴蒸气"]}, {"at": "co2", "cells": ["红褐色 / 砖红色", "Fe(OH)3 / Cu2O"]}, {"at": "co3", "cells": ["黑色", "FeO、Fe3O4、CuO、MnO2、C"]}, {"at": "co3", "cells": ["{黄绿色 / 浅绿色|green}", "Cl2 / Fe^2+ 溶液"]}], "size": 30, "rowHeight": 56}], "callout": {"label": "解题方法", "at": "co4", "text": "推断题：{颜色是突破口}"}}} />;
