import React from 'react';
import {AutoScene} from '../components/auto';

export const Band: React.FC = () => <AutoScene k="band" d={{"tag": "考点八", "title": "各波段的特征与应用", "blocks": [{"t": "table", "at": "h1", "head": ["波段", "特征与应用"], "cols": "1fr 2fr", "rows": [{"at": "h1", "cells": ["无线电波", "通信、广播；{微波}：雷达、微波炉"]}, {"at": "h2", "cells": ["红外线", "{热作用强}：遥感、测温"]}, {"at": "h3", "cells": ["紫外线", "{杀菌消毒}、荧光"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "要点", "at": "h4", "text": "红外{热作用}，紫外{杀菌、荧光}"}, "beat": {"k": "tan", "at": "h3b", "text": "晒黑\n是{紫外线|red}干的"}}} />;
