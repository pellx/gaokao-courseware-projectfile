import React from 'react';
import {AutoScene} from '../components/auto';

export const Rule: React.FC = () => <AutoScene k="rule" d={{"tag": "考点二", "title": "水解的规律", "blocks": [{"t": "big", "at": "ru1", "text": "有弱才水解，{越弱越水解}，谁强显谁性", "size": 42}, {"t": "table", "at": "ru2", "head": ["盐", "类型", "溶液"], "cols": "1.2fr 1.5fr 0.8fr", "rows": [{"at": "ru2", "cells": ["NaCl", "强酸强碱盐", "中性"]}, {"at": "ru2", "cells": ["NH4Cl", "强酸弱碱盐", "{酸性|orange}"]}, {"at": "ru2", "cells": ["Na2CO3", "强碱弱酸盐", "{碱性}"]}], "size": 31, "rowHeight": 58}, {"t": "text", "at": "ru3", "text": "同浓度碱性：CH3COONa < NaHCO3 < NaClO < {Na2CO3}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ru4", "text": "Na2CO3 碱性更强：对应的酸 {HCO3^-} 更弱"}, "beat": {"k": "mugi", "at": "ru3b", "text": "谁{强|red}\n就显谁的性"}}} />;
