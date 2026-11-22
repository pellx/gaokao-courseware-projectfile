import React from 'react';
import {AutoScene} from '../components/auto';

export const Valence: React.FC = () => <AutoScene k="valence" d={{"tag": "考点二", "title": "价态规律", "blocks": [{"t": "table", "at": "va1", "head": ["价态", "性质", "硫", "铁"], "cols": "1fr 1.4fr 1.3fr 1fr", "rows": [{"at": "va1", "cells": ["{最高价}", "只有氧化性", "H2SO4（+6）", "Fe^3+（+3）"]}, {"at": "va1", "cells": ["{中间价|orange}", "既有氧化性又有还原性", "{S、SO2|orange}", "{Fe^2+|orange}"]}, {"at": "va1", "cells": ["{最低价|green}", "只有还原性", "H2S（−2）", "Fe（0）"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "易错", "at": "va4", "text": "价态规律针对{元素}：HCl 中 H 显氧化性、Cl 显还原性"}}} />;
