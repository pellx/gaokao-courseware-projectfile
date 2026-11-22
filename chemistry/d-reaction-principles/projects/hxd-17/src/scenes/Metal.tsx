import React from 'react';
import {AutoScene} from '../components/auto';

export const Metal: React.FC = () => <AutoScene k="metal" d={{"tag": "考点四", "title": "电冶金", "blocks": [{"t": "table", "at": "mt2", "head": ["金属", "电解", "原因"], "cols": "0.7fr 1.5fr 2fr", "rows": [{"at": "mt2", "cells": ["Na", "熔融 NaCl", "—"]}, {"at": "mt2", "cells": ["Mg", "熔融 MgCl2", "MgO 熔点太高"]}, {"at": "mt3", "cells": ["Al", "熔融 {Al2O3}（加冰晶石）", "AlCl3 是{共价化合物}"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "易错", "at": "mt4", "text": "电解 NaCl {溶液}得不到 Na"}}} />;
