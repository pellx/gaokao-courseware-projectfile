import React from 'react';
import {AutoScene} from '../components/auto';

export const Structural: React.FC = () => <AutoScene k="structural" d={{"tag": "考点二", "title": "构造异构", "blocks": [{"t": "table", "at": "st1", "head": ["类型", "例"], "cols": "1fr 2.2fr", "rows": [{"at": "st1", "cells": ["{碳架异构}", "正丁烷 与 异丁烷"]}, {"at": "st2", "cells": ["{位置异构|orange}", "1-丁烯 与 2-丁烯"]}, {"at": "st3", "cells": ["{官能团异构}", "CH3CH2OH 与 CH3OCH3"]}], "size": 34, "rowHeight": 70}], "callout": {"label": "解题方法", "at": "st4", "text": "顺序：{官能团} → 碳架 → 位置"}}} />;
