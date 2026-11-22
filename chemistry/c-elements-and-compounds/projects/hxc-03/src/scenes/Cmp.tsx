import React from 'react';
import {AutoScene} from '../components/auto';

export const Cmp: React.FC = () => <AutoScene k="cmp" d={{"tag": "考点七", "title": "漂白原理的比较", "blocks": [{"t": "table", "at": "cp1", "head": ["类型", "代表物质", "特点"], "cols": "0.8fr 2.2fr 1.4fr", "rows": [{"at": "cp1", "cells": ["{氧化型}", "HClO、NaClO、Na2O2、H2O2、O3", "{不可逆}"]}, {"at": "cp2", "cells": ["{化合型|orange}", "SO2", "加热{恢复|orange}原色"]}, {"at": "cp3", "cells": ["{吸附型|green}", "活性炭", "物理变化"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "易错", "at": "cp4", "text": "SO2 不漂白指示剂；Cl2 + SO2 + 2H2O = H2SO4 + 2HCl，混合后{失去漂白性}"}, "beat": {"k": "bleach", "at": "cp3b", "text": "洗白了回不去\n{氧化型漂白，不可逆|red}"}}} />;
