import React from 'react';
import {AutoScene} from '../components/auto';

export const Craft: React.FC = () => <AutoScene k="craft" d={{"tag": "考点三", "title": "传统工艺", "blocks": [{"t": "table", "at": "cr1", "head": ["工艺", "化学知识"], "cols": "1fr 3fr", "rows": [{"at": "cr1", "cells": ["陶瓷", "{硅酸盐材料}，烧制是化学变化"]}, {"at": "cr2", "cells": ["青铜", "铜锡{合金}"]}, {"at": "cr2", "cells": ["造纸", "纤维素"]}, {"at": "cr3", "cells": ["酿酒", "淀粉 → 葡萄糖 → {乙醇}"]}, {"at": "cr3", "cells": ["黑火药", "S + 2KNO3 + 3C = K2S + N2↑ + 3CO2↑"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "易错", "at": "cr4", "text": "黑火药：KNO3、S 是{氧化剂}，C 是还原剂"}}} />;
