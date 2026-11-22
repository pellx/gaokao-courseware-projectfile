import React from 'react';
import {AutoScene} from '../components/auto';

export const Roast: React.FC = () => <AutoScene k="roast" d={{"tag": "考点四", "title": "焙烧与煅烧", "blocks": [{"t": "table", "at": "ro1", "head": ["目的", "例"], "cols": "1.6fr 2.4fr", "rows": [{"at": "ro1", "cells": ["除去有机物", "灼烧"]}, {"at": "ro1", "cells": ["{氧化}低价态", "4FeS2 + 11O2 → 2Fe2O3 + 8SO2"]}, {"at": "ro2", "cells": ["分解", "CaCO3 → CaO + CO2"]}, {"at": "ro2", "cells": ["难溶 → {可溶}", "SiO2 + Na2CO3 → Na2SiO3 + CO2"]}], "size": 30, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "ro4", "text": "有{空气}就想到氧化"}, "beat": {"k": "shock", "at": "ro3b", "text": "焙烧时\nO2 也{参加反应|red}"}}} />;
