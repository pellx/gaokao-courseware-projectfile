import React from 'react';
import {AutoScene} from '../components/auto';

export const Particle: React.FC = () => <AutoScene k="particle" d={{"tag": "考点八", "title": "粒子的发现与分类", "blocks": [{"t": "table", "at": "h2", "head": ["类别", "举例"], "cols": "1fr 2fr", "rows": [{"at": "h3", "cells": ["{强子}", "质子、中子、介子"]}, {"at": "h3", "cells": ["{轻子}", "电子、中微子、μ 子、τ 子"]}, {"at": "h2", "cells": ["规范玻色子", "传递相互作用，如{光子}"]}, {"at": "h2", "cells": ["希格斯玻色子", "与质量的来源有关"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "易错", "at": "h4", "text": "质子、中子{不是}基本粒子"}}} />;
