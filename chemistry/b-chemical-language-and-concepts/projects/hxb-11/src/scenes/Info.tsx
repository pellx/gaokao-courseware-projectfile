import React from 'react';
import {AutoScene} from '../components/auto';

export const Info: React.FC = () => <AutoScene k="info" d={{"tag": "考点四", "title": "从题目信息读产物", "blocks": [{"t": "table", "at": "in_1", "head": ["题目信息", "读出的产物"], "cols": "1.6fr 1.4fr", "rows": [{"at": "in_1", "cells": ["流程箭头、滤液、滤渣", "{直接给出的物质}"]}, {"at": "in_2", "cells": ["溶液变黄", "Fe^3+（或 Br2、I2 稀溶液）"]}, {"at": "in_2", "cells": ["无色气体遇空气变红棕", "{NO}"]}, {"at": "in_3", "cells": ["加淀粉溶液变蓝", "I2"]}, {"at": "in_3", "cells": ["加 BaCl2 有白色沉淀（酸性）", "SO4^2-"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "in_4", "text": "先{圈出给出的物质}，判断氧化剂和还原剂，缺的再查表"}}} />;
