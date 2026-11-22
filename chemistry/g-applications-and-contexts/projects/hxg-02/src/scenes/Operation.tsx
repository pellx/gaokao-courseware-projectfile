import React from 'react';
import {AutoScene} from '../components/auto';

export const Operation: React.FC = () => <AutoScene k="operation" d={{"tag": "考点二", "title": "古籍中的实验操作", "blocks": [{"t": "table", "at": "op1", "head": ["记载", "操作"], "cols": "2.8fr 1fr", "rows": [{"at": "op1", "cells": ["蒸令气上（烧酒）", "{蒸馏}"]}, {"at": "op2", "cells": ["砒烟上飞着覆器，遂凝结", "{升华}"]}, {"at": "op3", "cells": ["乙醚提取青蒿素", "萃取"]}, {"at": "op3", "cells": ["煮海为盐", "蒸发结晶"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "op4", "text": "抓关键字：“{蒸令气上}”“{上飞凝结}”"}}} />;
