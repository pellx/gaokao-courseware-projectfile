import React from 'react';
import {AutoScene} from '../components/auto';

export const Groupthree: React.FC = () => <AutoScene k="fg3" d={{"tag": "考点四", "title": "常见官能团（三）", "blocks": [{"t": "table", "at": "f31", "head": ["官能团", "结构", "类别"], "cols": "1.2fr 1.2fr 1fr", "rows": [{"at": "f31", "cells": ["{醚键}", "—O—", "醚"]}, {"at": "f32", "cells": ["氨基", "—NH2", "胺"]}, {"at": "f32", "cells": ["{酰胺基}", "—CONH—", "酰胺"]}, {"at": "f33", "cells": ["硝基", "—NO2", "硝基化合物"]}, {"at": "f33", "cells": ["氰基", "—CN", "腈"]}], "size": 32, "rowHeight": 58}], "callout": {"label": "易错", "at": "f34", "text": "只有 —O— 的才是{醚键}；连着 C=O 的是酯基"}}} />;
