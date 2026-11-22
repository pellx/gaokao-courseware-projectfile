import React from 'react';
import {AutoScene} from '../components/auto';

export const Purify: React.FC = () => <AutoScene k="purify" d={{"tag": "考点五", "title": "铁盐的除杂", "blocks": [{"t": "table", "at": "pu1", "head": ["物质（杂质）", "试剂", "原理"], "cols": "1.3fr 1.2fr 2fr", "rows": [{"at": "pu1", "cells": ["FeCl3（FeCl2）", "{Cl2} 或 H2O2", "Fe^2+ 氧化为 Fe^3+"]}, {"at": "pu2", "cells": ["FeCl2（FeCl3）", "{过量铁粉}，过滤", "2Fe^3+ + Fe = 3Fe^2+"]}, {"at": "pu3", "cells": ["CuCl2（FeCl3）", "{CuO} 或 Cu(OH)2", "调 pH 使 Fe^3+ 沉淀"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "解题方法", "at": "pu4", "text": "除杂三原则：{不增、不减、易分离}"}}} />;
