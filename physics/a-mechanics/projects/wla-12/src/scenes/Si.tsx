import React from 'react';
import {AutoScene} from '../components/auto';

export const Si: React.FC = () => <AutoScene k="si" d={{"tag": "考点七", "title": "国际单位制", "blocks": [{"t": "table", "at": "g2", "head": ["基本量", "单位名称", "符号"], "cols": "1fr 1fr 1fr", "rows": [{"at": "g2", "cells": ["长度", "米", "m"]}, {"at": "g2", "cells": ["质量", "千克", "kg"]}, {"at": "g2", "cells": ["时间", "秒", "s"]}], "size": 32, "rowHeight": 58}, {"t": "text", "at": "g3", "text": "N、J、m/s 是{导出单位}", "size": 32}], "callout": {"label": "易错", "at": "g4", "text": "{N 不是基本单位}；g、cm、h 不是 SI 基本单位"}}} />;
