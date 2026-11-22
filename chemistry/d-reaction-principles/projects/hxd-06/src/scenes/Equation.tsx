import React from 'react';
import {AutoScene} from '../components/auto';

export const Equation: React.FC = () => <AutoScene k="eq" d={{"tag": "考点二", "title": "K 与方程式的关系", "blocks": [{"t": "table", "at": "eq1", "head": ["方程式", "ΔH", "K"], "cols": "1.3fr 1fr 1fr", "rows": [{"at": "eq1", "cells": ["反过来写", "变号", "{倒数}"]}, {"at": "eq2", "cells": ["系数乘 2", "乘 2", "{平方}"]}, {"at": "eq3", "cells": ["两式相加", "相加", "{相乘}"]}, {"at": "eq3", "cells": ["两式相减", "相减", "{相除}"]}], "size": 33, "rowHeight": 66}], "callout": {"label": "易错", "at": "eq4", "text": "ΔH {加减}；K {乘除、乘方}"}}} />;
