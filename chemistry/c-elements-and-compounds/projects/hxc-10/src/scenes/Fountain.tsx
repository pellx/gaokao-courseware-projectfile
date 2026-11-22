import React from 'react';
import {AutoScene} from '../components/auto';

export const Fountain: React.FC = () => <AutoScene k="fountain" d={{"tag": "考点八", "title": "喷泉实验", "blocks": [{"t": "big", "at": "fo1", "text": "气体溶解或反应 → 烧瓶内{压强骤降} → 液体喷入", "size": 38}, {"t": "table", "at": "fo2", "head": ["气体", "液体"], "cols": "1.5fr 1.5fr", "rows": [{"at": "fo2", "cells": ["NH3、HCl", "{水}"]}, {"at": "fo2", "cells": ["CO2、SO2、Cl2", "{NaOH 溶液|orange}"]}], "size": 32, "rowHeight": 64}, {"t": "rule", "tag": "浓度", "at": "fo4", "text": "标况下充满 NH3 或 HCl：c = {1/22.4 mol/L}", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "fo5", "text": "CO2 + 水 {不能}形成喷泉，要用 NaOH 溶液"}}} />;
