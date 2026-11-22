import React from 'react';
import {AutoScene} from '../components/auto';

export const Formate: React.FC = () => <AutoScene k="formate" d={{"tag": "考点七", "title": "甲酸酯与酚酯", "blocks": [{"t": "table", "at": "fm1", "head": ["结构", "特点"], "cols": "1.2fr 2.4fr", "rows": [{"at": "fm1", "cells": ["甲酸酯 HCOOR", "水解 + {银镜反应}"]}, {"at": "fm2", "cells": ["酚酯 RCOOC6H5", "水解消耗 {2 mol NaOH}"]}, {"at": "fm3", "cells": ["{甲酸酚酯} HCOOC6H5", "银镜 + 水解 + 2 mol NaOH"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "fm4", "text": "“银镜 + 水解” → {甲酸酯}"}}} />;
