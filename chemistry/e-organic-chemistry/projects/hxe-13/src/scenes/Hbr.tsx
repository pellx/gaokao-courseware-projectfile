import React from 'react';
import {AutoScene} from '../components/auto';

export const Hbr: React.FC = () => <AutoScene k="h2br2" d={{"tag": "考点八", "title": "消耗 H2、Br2 的量", "blocks": [{"t": "table", "at": "hb1", "head": ["结构", "H2 / mol", "Br2 / mol（溴水）"], "cols": "1.6fr 1fr 1.4fr", "rows": [{"at": "hb1", "cells": ["C=C", "1", "1"]}, {"at": "hb1", "cells": ["C≡C", "2", "2"]}, {"at": "hb1", "cells": ["苯环", "{3}", "{0}"]}, {"at": "hb1", "cells": ["醛基、酮羰基", "1", "醛基被氧化"]}, {"at": "hb2", "cells": ["酚羟基邻、对位 H", "—", "{每个 1}"]}, {"at": "hb1", "cells": ["羧基、酯基、酰胺基", "{0}", "0"]}], "size": 29, "rowHeight": 54}], "callout": {"label": "易错", "at": "hb4", "text": "酚的邻、对位{有 H 才算}"}}} />;
