import React from 'react';
import {AutoScene} from '../components/auto';

export const Precise: React.FC = () => <AutoScene k="precise" d={{"tag": "考点二", "title": "计量仪器的精度", "blocks": [{"t": "table", "at": "pr1", "head": ["仪器", "精度", "特点"], "cols": "1fr 1fr 1.8fr", "rows": [{"at": "pr1", "cells": ["托盘天平", "0.1 g", "左物右码"]}, {"at": "pr1", "cells": ["量筒", "0.1 mL", "{无 0 刻度}"]}, {"at": "pr2", "cells": ["滴定管", "{0.01 mL}", "0 刻度{在上}"]}, {"at": "pr3", "cells": ["容量瓶", "—", "{一条刻度线}，规格固定"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "易错", "at": "pr4", "text": "配 480 mL 选 {500 mL} 容量瓶"}, "beat": {"k": "doily", "at": "pr3b", "text": "小数点后几位\n{看用什么仪器|red}"}}} />;
