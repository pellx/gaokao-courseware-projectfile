import React from 'react';
import {AutoScene} from '../components/auto';

export const Bright: React.FC = () => <AutoScene k="bright" d={{"tag": "考点三", "title": "亮条纹和暗条纹的条件", "blocks": [{"t": "table", "at": "c1", "head": ["路程差 Δs", "条纹"], "cols": "1.6fr 1fr", "rows": [{"at": "c2", "cells": ["{nλ}（n = 0, 1, 2…）", "亮条纹"]}, {"at": "c3", "cells": ["{(2n+1)λ/2}", "暗条纹"]}], "size": 38, "rowHeight": 80}], "callout": {"label": "要点", "at": "c4", "text": "中央 Δs = 0，是{亮条纹}"}}} />;
