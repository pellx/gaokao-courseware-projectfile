import React from 'react';
import {AutoScene} from '../components/auto';

export const Introduce: React.FC = () => <AutoScene k="introduce" d={{"tag": "考点三", "title": "官能团的引入", "blocks": [{"t": "table", "at": "in31", "head": ["引入", "方法"], "cols": "1fr 3fr", "rows": [{"at": "in31", "cells": ["{C=C}", "醇、卤代烃消去"]}, {"at": "in32", "cells": ["—X", "取代；加成；醇与 HX"]}, {"at": "in33", "cells": ["{—OH}", "烯烃加水；卤代烃水解；醛酮还原；酯水解"]}, {"at": "in34", "cells": ["—CHO、{—COOH}", "醇氧化；烯烃氧化；侧链氧化；酯水解"]}], "size": 30, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "in35", "text": "逆推时问：{可以由什么变来}"}}} />;
