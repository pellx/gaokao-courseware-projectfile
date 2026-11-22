import React from 'react';
import {AutoScene} from '../components/auto';

export const Special: React.FC = () => <AutoScene k="special" d={{"tag": "考点五", "title": "特殊试剂的保存", "blocks": [{"t": "table", "at": "sp1", "head": ["试剂", "保存方法"], "cols": "1.4fr 2fr", "rows": [{"at": "sp1", "cells": ["NaOH 等碱性溶液", "{橡胶塞}"]}, {"at": "sp2", "cells": ["氢氟酸", "{塑料瓶}"]}, {"at": "sp3", "cells": ["Na、K", "{煤油}中"]}, {"at": "sp3", "cells": ["白磷 / 液溴", "水中 / 水封"]}, {"at": "sp4", "cells": ["FeSO4 溶液", "加{铁粉}"]}], "size": 31, "rowHeight": 58}], "callout": {"label": "易错", "at": "sp4", "text": "FeSO4 加{铁粉}；FeCl3 加盐酸"}}} />;
