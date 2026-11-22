import React from 'react';
import {AutoScene} from '../components/auto';

export const Limit: React.FC = () => <AutoScene k="limit" d={{"tag": "考点七", "title": "牛顿力学的成就与局限", "blocks": [{"t": "table", "at": "g1", "head": ["领域", "适用理论"], "cols": "1fr 1fr", "rows": [{"at": "g1", "cells": ["宏观、低速", "{牛顿力学}"]}, {"at": "g2", "cells": ["高速（接近光速）", "相对论"]}, {"at": "g2", "cells": ["微观粒子", "量子力学"]}], "size": 34, "rowHeight": 64}, {"t": "text", "at": "g3", "text": "牛顿力学是相对论和量子力学在一定条件下的{特殊情形}", "size": 32}], "callout": {"label": "要点", "at": "g4", "text": "牛顿力学适用于{宏观、低速}"}, "beat": {"k": "pair", "at": "g3b", "text": "各管一片\n宏观低速：{牛顿力学|red}"}}} />;
