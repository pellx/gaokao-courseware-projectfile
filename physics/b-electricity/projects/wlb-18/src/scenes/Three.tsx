import React from 'react';
import {AutoScene} from '../components/auto';

export const Three: React.FC = () => <AutoScene k="three" d={{"tag": "考点三", "title": "Φ、ΔΦ 与 ΔΦ/Δt", "blocks": [{"t": "table", "at": "c1", "head": ["物理量", "意义", "与 E 的关系"], "cols": "0.8fr 1.4fr 1fr", "rows": [{"at": "c1", "cells": ["Φ", "磁通量", "无必然联系"]}, {"at": "c2", "cells": ["ΔΦ", "变化量", "无必然联系"]}, {"at": "c2", "cells": ["ΔΦ/Δt", "{变化率}", "{决定 E}"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "易错", "at": "c4", "text": "Φ 大，E 不一定{大}"}, "beat": {"k": "toast", "at": "c3b", "text": "不看多少，看多快\n{ΔΦ/Δt|red}"}}} />;
