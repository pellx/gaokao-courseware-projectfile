import React from 'react';
import {AutoScene} from '../components/auto';

export const Real: React.FC = () => <AutoScene k="real" d={{"tag": "考点五", "title": "合成氨的实际条件", "blocks": [{"t": "table", "at": "re1", "head": ["条件", "选择", "理由"], "cols": "0.8fr 1.2fr 2.2fr", "rows": [{"at": "re2", "cells": ["温度", "400～500 ℃", "{催化剂活性最高}，速率较快"]}, {"at": "re3", "cells": ["压强", "10～30 MPa", "兼顾平衡与{设备成本|orange}"]}, {"at": "re1", "cells": ["催化剂", "铁触媒", "加快反应速率"]}, {"at": "re4", "cells": ["浓度", "分离 NH3、循环 N2 和 H2", "提高{原料利用率}"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "易错", "at": "re5", "text": "400～500 ℃ 是为了{催化剂活性和速率}，不是提高平衡转化率"}}} />;
