import React from 'react';
import {AutoScene} from '../components/auto';

export const Tail: React.FC = () => <AutoScene k="tail" d={{"tag": "考点七", "title": "尾气处理", "blocks": [{"t": "table", "at": "ta1", "head": ["方法", "适用"], "cols": "1fr 2.6fr", "rows": [{"at": "ta1", "cells": ["{吸收}", "Cl2、SO2、NO2、H2S → NaOH 溶液"]}, {"at": "ta2", "cells": ["燃烧", "CO"]}, {"at": "ta2", "cells": ["收集", "气球、塑料袋"]}], "size": 32, "rowHeight": 62}, {"t": "rule", "tag": "防倒吸", "at": "ta3", "text": "NH3、HCl：倒扣漏斗、{干燥管}、安全瓶", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "ta4", "text": "NO {不能直接被 NaOH 吸收}"}, "beat": {"k": "sticks", "at": "ta3b", "text": "有毒尾气\n{不能直接排放|red}"}}} />;
