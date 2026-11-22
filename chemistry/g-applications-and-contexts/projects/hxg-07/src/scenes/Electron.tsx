import React from 'react';
import {AutoScene} from '../components/auto';

export const Electron: React.FC = () => <AutoScene k="electron" d={{"tag": "考点一", "title": "电子从哪里来、到哪里去", "blocks": [{"t": "chain", "steps": [{"at": "el1", "text": "有无电源？"}, {"at": "el2", "text": "{谁失电子}"}, {"at": "el3", "text": "{谁得电子}"}], "arrows": [], "center": true, "size": 40}, {"t": "table", "at": "el2", "head": ["装置", "失电子的一极", "得电子的一极"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "el2", "cells": ["原电池", "{负极}", "正极"]}, {"at": "el2", "cells": ["电解池", "{阳极}", "阴极"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "el4", "text": "先{标化合价}"}, "beat": {"k": "band", "at": "el3b", "text": "装置再乱\n先找{电子的来和去|red}"}}} />;
