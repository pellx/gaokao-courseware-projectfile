import React from 'react';
import {AutoScene} from '../components/auto';

export const Reagent: React.FC = () => <AutoScene k="reagent" d={{"tag": "考点四", "title": "除杂试剂的选择", "blocks": [{"t": "table", "at": "re2", "head": ["杂质", "除杂试剂", "原理"], "cols": "1fr 1.4fr 2fr", "rows": [{"at": "re2", "cells": ["Cu^2+、Pb^2+", "{MnS}、Na2S", "生成更难溶的硫化物"]}, {"at": "re2", "cells": ["Ca^2+、Mg^2+", "{NH4F}、NaF", "生成 CaF2、MgF2"]}, {"at": "re3", "cells": ["Fe^3+", "ZnO 等调 pH", "Fe(OH)3 沉淀"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "re4", "text": "优先选{阳离子与目标产物相同}的"}, "beat": {"k": "kita", "at": "re3b", "text": "除杂剂最好是\n{“自家人”|red}"}}} />;
