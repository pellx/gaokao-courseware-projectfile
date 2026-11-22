import React from 'react';
import {AutoScene} from '../components/auto';

export const Mnofour: React.FC = () => <AutoScene k="mno4" d={{"tag": "考点二", "title": "MnO4^- 的还原产物看环境", "blocks": [{"t": "table", "at": "mo1", "head": ["环境", "还原产物", "现象"], "cols": "1fr 1.2fr 1.8fr", "rows": [{"at": "mo1", "cells": ["{酸性}", "{Mn^2+}", "紫红色褪去"]}, {"at": "mo1", "cells": ["中性 / 弱碱性", "{MnO2|orange}", "生成{黑色沉淀|orange}"]}, {"at": "mo1", "cells": ["强碱性", "{MnO4^2-|green}", "溶液变{绿色|green}"]}], "size": 32, "rowHeight": 68}, {"t": "big", "at": "mo3", "text": "2MnO4^- + 3SO3^2- + H2O = 2MnO2↓ + 3SO4^2- + 2OH^-", "size": 34}], "callout": {"label": "易错", "at": "mo4", "text": "酸化 KMnO4 用{硫酸}，不用盐酸"}}} />;
