import React from 'react';
import {AutoScene} from '../components/auto';

export const Design: React.FC = () => <AutoScene k="design" d={{"tag": "考点七", "title": "设计原电池", "blocks": [{"t": "big", "at": "de1", "text": "2Fe^3+ + Cu = 2Fe^2+ + Cu^2+", "size": 42}, {"t": "table", "at": "de2", "head": ["组成", "选择"], "cols": "1fr 2fr", "rows": [{"at": "de2", "cells": ["负极", "{Cu}（还原剂）"]}, {"at": "de2", "cells": ["正极", "{石墨或 Ag|orange}"]}, {"at": "de2", "cells": ["电解质溶液", "FeCl3 溶液"]}], "size": 33, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "de4", "text": "还原剂作负极，正极选{更不活泼的导体}"}}} />;
