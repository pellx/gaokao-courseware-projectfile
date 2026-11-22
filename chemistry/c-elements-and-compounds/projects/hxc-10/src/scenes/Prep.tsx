import React from 'react';
import {AutoScene} from '../components/auto';

export const Prep: React.FC = () => <AutoScene k="prep" d={{"tag": "考点五", "title": "氨的实验室制法", "blocks": [{"t": "big", "at": "pr1", "text": "2NH4Cl + Ca(OH)2 ═△═ CaCl2 + 2NH3↑ + 2H2O", "size": 38}, {"t": "table", "at": "pr2", "head": ["环节", "要点"], "cols": "1fr 3fr", "rows": [{"at": "pr1", "cells": ["发生", "固固加热，试管口{略向下倾斜}"]}, {"at": "pr2", "cells": ["干燥", "{碱石灰}（不用浓硫酸、CaCl2）"]}, {"at": "pr3", "cells": ["收集", "{向下排空气法}，管口塞棉花"]}, {"at": "pr4", "cells": ["验满", "湿润的红色石蕊试纸变色；蘸浓盐酸的玻璃棒产生白烟"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "易错", "at": "pr5", "text": "只加热 NH4Cl 制不到 NH3：管口又{重新化合}"}, "beat": {"k": "panic", "at": "pr4b", "text": "刺激性气味\n{唯一的碱性气体|red}"}}} />;
