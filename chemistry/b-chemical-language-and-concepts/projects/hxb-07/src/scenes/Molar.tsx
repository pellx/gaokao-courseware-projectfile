import React from 'react';
import {AutoScene} from '../components/auto';

export const Molar: React.FC = () => <AutoScene k="molar" d={{"tag": "考点二", "title": "摩尔质量", "blocks": [{"t": "big", "at": "ma1", "text": "n = m / M　　M 的单位：{g/mol}", "size": 46}, {"t": "table", "at": "ma2", "head": ["概念", "例：H2SO4", "单位"], "cols": "1.5fr 1fr 1fr", "rows": [{"at": "ma2", "cells": ["摩尔质量 M", "98", "{g/mol}"]}, {"at": "ma4", "cells": ["相对分子质量 Mr", "98", "1（不写）"]}, {"at": "ma4", "cells": ["1 mol 的质量", "98", "{g|orange}"]}], "size": 32, "rowHeight": 66}, {"t": "text", "at": "ma3", "text": "9 g H2O：n = 9 g ÷ 18 g/mol = {0.5 mol}", "size": 34, "center": true}], "callout": {"label": "易错", "at": "ma4", "text": "“H2SO4 的摩尔质量是 98 g”错，应为 {98 g/mol}"}}} />;
