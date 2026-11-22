import React from 'react';
import {AutoScene} from '../components/auto';

export const Algebra: React.FC = () => <AutoScene k="algebra" d={{"tag": "考点二", "title": "方程式的加减", "blocks": [{"t": "table", "at": "al1", "head": ["方程式的变化", "ΔH 的变化"], "cols": "1.2fr 1fr", "rows": [{"at": "al2", "cells": ["反过来写", "{变号}"]}, {"at": "al2", "cells": ["乘以 n", "{乘以 n}"]}, {"at": "al3", "cells": ["两式相加 / 相减", "ΔH 相加 / 相减"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "易错", "at": "al4", "text": "反写忘{变号}、乘倍数漏乘 ΔH"}}} />;
