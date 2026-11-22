import React from 'react';
import {AutoScene} from '../components/auto';

export const Neutral: React.FC = () => <AutoScene k="neutral" d={{"tag": "考点七", "title": "恰好中和与中性", "blocks": [{"t": "big", "at": "ne1", "text": "恰好中和 {≠} 中性", "size": 56}, {"t": "table", "at": "ne3", "head": ["恰好中和", "生成的盐", "溶液"], "cols": "1.3fr 1.3fr 0.8fr", "rows": [{"at": "ne3", "cells": ["强酸 + 强碱", "NaCl", "中性"]}, {"at": "ne3", "cells": ["强碱 + 弱酸", "CH3COONa", "{碱性}"]}, {"at": "ne3", "cells": ["强酸 + 弱碱", "NH4Cl", "{酸性|orange}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "易错", "at": "ne4", "text": "NaOH 滴醋酸到 pH = 7：{醋酸有剩余}"}, "beat": {"k": "dizzy", "at": "ne3b", "text": "恰好反应 ≠ 中性\n{不是一回事|red}"}}} />;
