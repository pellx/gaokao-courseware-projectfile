import React from 'react';
import {AutoScene} from '../components/auto';

export const Traps: React.FC = () => <AutoScene k="traps" d={{"tag": "考点七", "title": "常见陷阱汇总", "blocks": [{"t": "table", "at": "tr1", "head": ["陷阱", "例"], "cols": "1fr 3fr", "rows": [{"at": "tr1", "cells": ["{缺加热}", "MnO2 + 浓盐酸；Cu + 浓硫酸；乙醇制乙烯"]}, {"at": "tr2", "cells": ["{缺尾气处理}", "Cl2、SO2、NO2、H2S"]}, {"at": "tr3", "cells": ["试剂选错", "浓硫酸干燥 NH3；{NaOH 除 CO2 中的 HCl}"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "解题方法", "at": "tr4", "text": "清单：{加热、尾气、试剂、导管}"}}} />;
