import React from 'react';
import {AutoScene} from '../components/auto';

export const Function: React.FC = () => <AutoScene k="function" d={{"tag": "考点七", "title": "功能高分子", "blocks": [{"t": "table", "at": "fu1", "head": ["功能高分子", "关键结构"], "cols": "1.4fr 2.2fr", "rows": [{"at": "fu1", "cells": ["{高吸水性树脂}", "亲水基团 + 交联"]}, {"at": "fu2", "cells": ["{可降解高分子}（聚乳酸）", "含{酯基}，能水解"]}, {"at": "fu3", "cells": ["导电高分子（聚乙炔）", "单双键交替"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "解题方法", "at": "fu4", "text": "看{官能团}判断性质"}}} />;
