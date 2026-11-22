import React from 'react';
import {AutoScene} from '../components/auto';

export const Factor: React.FC = () => <AutoScene k="factor" d={{"tag": "考点八", "title": "内能的决定因素", "blocks": [{"t": "table", "at": "f1", "head": ["因素", "决定"], "cols": "1fr 1.4fr", "rows": [{"at": "f1", "cells": ["物质的量", "分子数"]}, {"at": "f1", "cells": ["温度", "分子{平均动能}"]}, {"at": "f1", "cells": ["体积", "分子{势能|orange}"]}], "size": 34, "rowHeight": 62}], "callout": {"label": "易错", "at": "f3", "text": "内能与{整体速度、高度}无关"}}} />;
