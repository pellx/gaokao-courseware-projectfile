import React from 'react';
import {AutoScene} from '../components/auto';

export const Diag: React.FC = () => <AutoScene k="diag" d={{"tag": "考点四", "title": "原子和离子结构示意图", "blocks": [{"t": "table", "at": "di2", "head": ["微粒", "圆圈内", "各层电子数"], "cols": "1fr 1fr 1.4fr", "rows": [{"at": "di2", "cells": ["Cl", "+17", "2、8、7"]}, {"at": "di2", "cells": ["Cl^-", "{+17}", "2、8、{8}"]}, {"at": "di3", "cells": ["Na^+", "+11", "2、8"]}, {"at": "di3", "cells": ["S^2-", "+16", "2、8、8"]}], "size": 34, "rowHeight": 70}], "callout": {"label": "易错", "at": "di4", "text": "Cl^- 圆圈内仍是 {+17}，不是 +18"}}} />;
