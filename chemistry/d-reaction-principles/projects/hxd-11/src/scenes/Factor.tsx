import React from 'react';
import {AutoScene} from '../components/auto';

export const Factor: React.FC = () => <AutoScene k="factor" d={{"tag": "考点四", "title": "影响水解的因素", "blocks": [{"t": "table", "at": "fa1", "head": ["条件", "水解平衡", "水解程度"], "cols": "1.4fr 1fr 1fr", "rows": [{"at": "fa1", "cells": ["升温", "正移", "{增大}"]}, {"at": "fa2", "cells": ["加水稀释", "正移", "{增大}"]}, {"at": "fa3", "cells": ["加酸（Fe^3+ 溶液中）", "逆移", "{减小|orange}"]}, {"at": "fa4", "cells": ["增大盐的浓度", "正移", "{减小|orange}"]}], "size": 31, "rowHeight": 60}], "callout": {"label": "易错", "at": "fa4", "text": "加该盐固体：平衡正移，水解程度{减小}"}}} />;
