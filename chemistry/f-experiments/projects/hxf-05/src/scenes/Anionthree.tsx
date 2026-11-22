import React from 'react';
import {AutoScene} from '../components/auto';

export const Anionthree: React.FC = () => <AutoScene k="anion2" d={{"tag": "考点五", "title": "CO3^2-、SO3^2-、I^- 的检验", "blocks": [{"t": "table", "at": "a21", "head": ["离子", "方法", "现象"], "cols": "0.8fr 1.6fr 2.2fr", "rows": [{"at": "a21", "cells": ["CO3^2-", "加盐酸", "{无色无味}气体，使石灰水变浑浊"]}, {"at": "a22", "cells": ["SO3^2-", "加盐酸", "{刺激性}气体，使品红褪色"]}, {"at": "a23", "cells": ["I^-", "氯水 + CCl4", "下层{紫红色}"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "易错", "at": "a24", "text": "石灰水变浑浊也可能是 {SO2}"}}} />;
