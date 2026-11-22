import React from 'react';
import {AutoScene} from '../components/auto';

export const Classic: React.FC = () => <AutoScene k="classic" d={{"tag": "考点四", "title": "经典理论的困难", "blocks": [{"t": "table", "at": "d2", "head": ["公式", "短波区", "长波区"], "cols": "1fr 1fr 1fr", "rows": [{"at": "d2", "cells": ["维恩公式", "符合", "{偏离}"]}, {"at": "d3", "cells": ["瑞利公式", "{严重不符}", "基本一致"]}], "size": 34, "rowHeight": 70}], "callout": {"label": "要点", "at": "d4", "text": "经典理论解释不了黑体辐射 → 走向{量子}"}, "beat": {"k": "cry", "at": "d3b", "text": "经典理论\n{解释不了|red}黑体辐射"}}} />;
