import React from 'react';
import {AutoScene} from '../components/auto';

export const Sugar: React.FC = () => <AutoScene k="sugar" d={{"tag": "考点一", "title": "糖类的分类", "blocks": [{"t": "table", "at": "su2", "head": ["类别", "能否水解", "例"], "cols": "0.8fr 1.6fr 1.6fr", "rows": [{"at": "su2", "cells": ["单糖", "{不能}", "葡萄糖、果糖"]}, {"at": "su2", "cells": ["二糖", "→ 2 分子单糖", "蔗糖、麦芽糖"]}, {"at": "su2", "cells": ["多糖", "→ 许多单糖", "淀粉、纤维素"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "易错", "at": "su4", "text": "葡萄糖{不能水解}"}}} />;
