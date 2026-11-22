import React from 'react';
import {AutoScene} from '../components/auto';

export const Gibbs: React.FC = () => <AutoScene k="dg" d={{"tag": "考点二", "title": "ΔG = ΔH − TΔS", "blocks": [{"t": "big", "at": "dg1", "text": "ΔG = ΔH − TΔS　{ΔG < 0} 自发", "size": 44}, {"t": "table", "at": "dg2", "head": ["ΔH", "ΔS", "自发性"], "cols": "1fr 1fr 2fr", "rows": [{"at": "dg2", "cells": ["< 0", "> 0", "{任何温度都自发}"]}, {"at": "dg2", "cells": ["> 0", "< 0", "{任何温度都不自发|orange}"]}, {"at": "dg3", "cells": ["< 0", "< 0", "{低温}自发"]}, {"at": "dg3", "cells": ["> 0", "> 0", "{高温|orange}自发"]}], "size": 33, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "dg4", "text": "低温自发且 ΔS < 0 → {ΔH < 0}"}, "beat": {"k": "finger", "at": "dg3b", "text": "两个都有利：总自发\n一好一坏：{看温度|red}"}}} />;
