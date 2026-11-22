import React from 'react';
import {AutoScene} from '../components/auto';

export const Mn: React.FC = () => <AutoScene k="mn" d={{"tag": "考点一", "title": "锰的价态与颜色", "blocks": [{"t": "table", "at": "mn1", "head": ["价态", "物质", "颜色"], "cols": "0.8fr 1.4fr 1.4fr", "rows": [{"at": "mn1", "cells": ["+2", "Mn^2+", "几乎无色"]}, {"at": "mn1", "cells": ["+4", "MnO2", "{黑色}"]}, {"at": "mn2", "cells": ["+6", "MnO4^2-", "{绿色|green}"]}, {"at": "mn2", "cells": ["+7", "MnO4^-", "{紫红色}"]}], "size": 32, "rowHeight": 64}, {"t": "rule", "tag": "MnO2", "at": "mn3", "text": "分解反应中作{催化剂|orange}；与浓盐酸作{氧化剂}", "c": "brown", "size": 30}], "callout": {"label": "解题方法", "at": "mn4", "text": "{紫红色褪去} → MnO4^- 被还原；黑色沉淀 → MnO2"}, "beat": {"k": "rainbow", "at": "mn2b", "text": "每种价态\n都有{自己的颜色|red}"}}} />;
