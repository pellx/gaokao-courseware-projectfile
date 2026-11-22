import React from 'react';
import {AutoScene} from '../components/auto';

export const Dry: React.FC = () => <AutoScene k="dry" d={{"tag": "考点四", "title": "洗气与干燥", "blocks": [{"t": "table", "at": "dr2", "head": ["干燥剂", "不能干燥"], "cols": "1.2fr 2.2fr", "rows": [{"at": "dr2", "cells": ["浓硫酸", "{NH3}、H2S、HI"]}, {"at": "dr2", "cells": ["碱石灰", "Cl2、CO2、SO2 等酸性气体"]}, {"at": "dr3", "cells": ["无水 CaCl2", "{NH3}"]}], "size": 32, "rowHeight": 64}, {"t": "text", "at": "dr1", "text": "洗气瓶{长进短出}；干燥管{大口进、小口出}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "dr4", "text": "干燥 NH3：只能用{碱石灰}"}, "beat": {"k": "stamp", "at": "dr3b", "text": "{长进短出|red}\n大进小出"}}} />;
