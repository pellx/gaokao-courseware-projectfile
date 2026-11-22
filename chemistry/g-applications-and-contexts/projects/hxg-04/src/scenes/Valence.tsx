import React from 'react';
import {AutoScene} from '../components/auto';

export const Valence: React.FC = () => <AutoScene k="valence" d={{"tag": "考点七", "title": "化合价的推断", "blocks": [{"t": "table", "at": "va2", "head": ["物质", "元素", "化合价"], "cols": "1.4fr 1fr 1fr", "rows": [{"at": "va2", "cells": ["LiFePO4", "Fe", "{+2}"]}, {"at": "va2", "cells": ["Na2S2O3", "S", "{+2}"]}, {"at": "va2", "cells": ["K2FeO4", "Fe", "{+6}"]}, {"at": "va2", "cells": ["NaBH4", "H", "−1"]}, {"at": "va3", "cells": ["Na2O2", "O", "−1"]}], "size": 32, "rowHeight": 56}], "callout": {"label": "解题方法", "at": "va4", "text": "先定{常见价态}，再求未知"}}} />;
